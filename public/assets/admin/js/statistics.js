// Set new default font family and font color to mimic Bootstrap's default styling
try {
    Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
    Chart.defaults.global.defaultFontColor = '#858796';
} catch (e) {
}

let loader = $(`<div style="
                width: 100%;
                height: 100%;
                position: absolute;
                top: 0;
                background-color: #0000001c;
                left: 0;
                "></div>`);

const MAX_DATE = formatDate(new Date());
const MIN_DATE = formatDate(subtractYears(new Date(), 1));
// canvas
var purchasesChart = document.getElementById("purchasesChart");
var ordersContainer = document.getElementById("orders");
// config
const purchasesChartConfig = {
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            label: "€",
            fill: true,
            // lineTension: 0,
            backgroundColor: "rgba(78, 115, 223, 0.05)",
            borderColor: "rgba(78, 115, 223, 1)",
            pointRadius: 2,
            pointBackgroundColor: "rgba(78, 115, 223, 1)",
            pointBorderColor: "rgba(78, 115, 223, 1)",
            pointHoverRadius: 3,
            pointHoverBackgroundColor: "rgba(78, 115, 223, 1)",
            pointHoverBorderColor: "rgba(78, 115, 223, 1)",
            pointHitRadius: 10,
            pointBorderWidth: 2,
            data: [],
        }],
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {display: false},
        tooltips: {
            enabled: true,
            mode: 'index',
            displayColors: false,
            backgroundColor: "rgb(255,255,255)",
            bodyFontColor: "#858796",
            titleMarginBottom: 10,
            titleFontColor: '#6e707e',
            titleFontSize: 14,
            borderColor: '#dddfeb',
            borderWidth: 1,
            xPadding: 10,
            yPadding: 10,
            intersect: false,
            caretPadding: 10,
            callbacks: {
                title: function (tooltipItem, chart) {
                    let sum = 0;
                    let datasets = chart.datasets[0];
                    let datasetLabel = datasets.label || '';
                    tooltipItem.forEach(function (item, key) {
                        sum += item.yLabel;
                    });
                    sum = number_format(sum, 2);
                    return tooltipItem.length > 0 ? `SUM: ${sum} ${datasetLabel}` : tooltipItem[0].xLabel;
                },
                label: function (tooltipItem, data) {
                    return tooltipItem.xLabel + ' - ' + number_format(tooltipItem.yLabel, 2) + '' + data.datasets[tooltipItem.datasetIndex].label;
                }
            }
        },
        scales: {
            xAxes: [{
                type: 'time',
                time: {
                    displayFormats: {
                        'hour': 'HH:mm',
                    },
                    tooltipFormats: {
                        'millisecond': 'MMM dd',
                        'second': 'yyyy-MM-dd HH:mm:ss',
                        'minute': 'yyyy-MM-dd HH:mm',
                        'hour': 'yyyy-MM-dd HH:mm',
                        'day': 'yyyy-MM-dd eeee',
                        'week': 'yyyy-MM-dd',
                        'month': 'yyyy MMMM',
                        'quarter': 'MMM-dd',
                        'year': 'yyyy',
                    },
                    tooltipFormat: 'yyyy-MM-dd HH:mm',
                    minUnit: 'hour',
                    unit: 'hour',
                    round: 'hour',
                },
                ticks: {
                    autoSkip: false,
                },
            }],
            yAxes: [{
                type: 'linear',
                stacked: false,
                ticks: {
                    autoSkip: false,
                    beginAtZero: true,
                    source: "auto",
                    callback: function (value, index, ticks) {
                        return `€${value}`;
                    }
                },
            }],
        }
    },
};
// charts
var purchases = chart(purchasesChart, purchasesChartConfig);


function ajax_charts(data = {}) {
    let src = document.getElementById("statistics")?.src;
    let manager_id = src?.split("manager_id=")[1] ?? null;
    data.calendar = !!$(".flatpickr-input").length;
    if (manager_id) data.manager_id = manager_id;
    const request = $.ajax({
        url: "/statistics",
        method: "GET",
        data: data,
        cache: false,
        dataType: "json",
        beforeSend: () => $(purchasesChart).closest('.card').append(loader),
        success: (response) => {
            for (let key in response) {
                let data = response[key];
                switch (key) {
                    case "purchases":
                        purchaseChartEdit(purchases, data);
                        break;
                    case "orders":
                        ordersEdit(ordersContainer, data);
                        break;
                    case "other":
                        otherEdit(ordersContainer, data);
                        break;
                }
            }
        }
    });
    request.always(() => loader.remove());
    return request;
}

function chart(elem, conf = {}) {
    return elem ? new Chart(elem, conf) : elem;
}

function purchaseChartEdit(chart, data = []) {
    if (chart) {
        chart.data.labels = [];
        chart.data.datasets[0].data = [];
        for (let i in data) {
            let obj = data[i];
            let timestamp = (obj.timestamp * 1000);
            let created_at = obj.created_at;
            let amount = number_format(obj.amount, 2, '.', '');
            chart.data.labels.push(timestamp);
            chart.data.datasets[0].data.push({
                x: timestamp,
                y: amount,
            });
        }
        chart.update();
    }
}

function ordersEdit(ordersContainer, data) {
    let parent = $(ordersContainer);
    let total = parseInt(data.total);
    let completed = parseInt(data.completed);
    let denied = parseInt(data.denied);
    let sum = number_format(data.sum, 2, ',', '.');
    let percent = data.targetPercent ? data.targetPercent : ((completed / total) * 100);
    percent = isNaN(percent) ? 0 : number_format(percent, 2);
    parent.find('#total').text(total);
    parent.find('#completed').text(completed);
    parent.find('#denied').text(denied);
    parent.find('#rate').text(`${percent}%`);
    parent.find('#sum').text(`€${sum}`);
    let progress = parent
        .find('#rate')
        .closest('.row')
        .find('.progress-bar[role="progressbar"]');
    if (progress.length) progress.attr({
        "style": `width: ${percent}%`,
        "aria-valuenow": percent
    });
}

function otherEdit(ordersContainer, data) {
    let parent = $(ordersContainer);
    let sum_all = number_format(data.sum_all, 2, ',', '.');
    let sum_approved_all = number_format(data.sum_approved_all, 2, ',', '.');
    let sum_approved_year = number_format(data.sum_approved_year, 2, ',', '.');
    let sum_year = number_format(data.sum_year, 2, ',', '.');
    parent.find('#sum_all').text(`€${sum_all}`);
    parent.find('#sum_approved_all').text(`€${sum_approved_all}`);
    parent.find('#sum_approved_year').text(`€${sum_approved_year}`);
    parent.find('#sum_year').text(`€${sum_year}`);
}

$(function () {
    ajax_charts();
    let flatpickrInput = $(".flatpickr-input");
    if (flatpickrInput.length) {
        let dateRange = flatpickrInput.flatpickr({
            mode: "range",
            dateFormat: "Y-m-d",
            defaultDate: [MIN_DATE, MAX_DATE],
            maxDate: "today",
            allowInput: true,
            onChange: function (selectedDates) {
                if (selectedDates.length === 2) {
                    dateRange.selectedDates[0] = selectedDates[0];
                    dateRange.selectedDates[1] = selectedDates[1];
                    let selectUnit = $('select#unit');
                    let unit = selectUnit.length ? selectUnit.val().split(":")[0] : 'hour';
                    ajax_charts({
                        dates: [formatDate(selectedDates[0]), formatDate(selectedDates[1])],
                        unit: unit
                    });
                }
            }
        });
    }

    $('select#unit').on('change', function (e) {
        let unit = $(this).val().split(":")[0];
        let format = (purchases.options.scales.xAxes[0].time.tooltipFormats
            || purchases.options.scales.xAxes[0].time.displayFormats)[unit];
        ajax_charts({
            dates: [formatDate(dateRange.selectedDates[0]), formatDate(dateRange.selectedDates[1])],
            unit: unit
        }).done(function (response) {
            purchases.options.scales.xAxes[0].time.unit = unit;
            purchases.options.scales.xAxes[0].time.round = unit;
            purchases.options.scales.xAxes[0].time.tooltipFormat = format
            purchases.options.scales.xAxes[0].time.isoWeekday = (unit === 'week');
            purchases.update();
        });
    });
});

function number_format(number, decimals, dec_point, thousands_sep) {
    // *     example: number_format(1234.56, 2, ',', ' ');
    // *     return: '1 234,56'
    number = (number + '').replace(',', '').replace(' ', '');
    var n = !isFinite(+number) ? 0 : +number,
        prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
        sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
        dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
        s = '',
        toFixedFix = function (n, prec) {
            var k = Math.pow(10, prec);
            return '' + Math.round(n * k) / k;
        };
    // Fix for IE parseFloat(0.55).toFixed(0) = 0;
    s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
    if (s[0].length > 3) {
        s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
    }
    if ((s[1] || '').length < prec) {
        s[1] = s[1] || '';
        s[1] += new Array(prec - s[1].length + 1).join('0');
    }
    return s.join(dec);
}

function formatDate(date, separator = '-') {
    let d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;

    return [year, month, day].join(separator);
}

function subtractYears(date, years) {
    date.setFullYear(date.getFullYear() - years);

    return date;
}
