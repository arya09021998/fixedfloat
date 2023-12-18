if (typeof $ !== 'undefined') $(document).ready(function () {
    let accordionSidebarFooter = $("ul#accordionSidebarFooter .collapse");
    $('.js-form').on('submit', function (e) {
        e.preventDefault();
    });
    $('#confirmModal').on('shown.bs.modal', function (event) {
        let modal = $(this);
        let form = modal.find('form');
        let button = $(event.relatedTarget);
        let url = button.data('url');
        let title = button.data('title') ?? 'Удалить';
        let method = button.data('method') ?? 'DELETE';
        let method_inp = form.find('input[name="_method"]');
        form.attr('action', url);
        modal.find('#modalLabel').text(title);
        if (method_inp.length) {
            method_inp.val(method.toUpperCase());
        }
    });
    $('textarea.summernote').summernote({
        height: 300,
        focus: true,
        toolbar: [
            ['style', ['style']],
            ['font', ['bold', 'underline', 'clear']],
            ['fontname', ['fontname']],
            ['color', ['color']],
            ['para', ['ul', 'ol', 'paragraph']],
            ['table', ['table']],
            ['insert', ['link', 'picture', 'video']],
            ['view', ['codeview', 'help']],
        ]
    });
    $(".custom-file-input").on("change", function () {
        let fileName = $(this).val().split("\\").pop();
        $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
    });
    if ($(window).width() < 768) {
        accordionSidebarFooter.collapse("hide");
    } else {
        accordionSidebarFooter.addClass("show");
    }
    $(window).resize(function () {
        if ($(window).width() < 768) {
            accordionSidebarFooter.collapse("hide");
        } else {
            accordionSidebarFooter.addClass("show");
        }
    });
});
