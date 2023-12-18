<x-app-layout>
    @include('includes.header')
    @includeWhen(!auth()->check(),'includes.auth')
    <main>
        <div class="wrapper">
            <h1>{{__('Affiliate program')}}</h1>
            <section class="affiliate-content">
                <p>{{__('Register in our affiliate program and get 40% of the profits from each of your exchange produced by your customers!')}}
                    <br>{{__('We appreciate our partners and will be happy to prepare any promotional materials to build a successful business with us.')}}
                </p>
            </section>
            <section class="affiliate-steps">
                <h3 class="affiliate-h3"><span>{{__('Three easy steps to earn with us:')}}</span></h3>
                <ul class="affiliate-how">
                    <li>
                        <div>
                            {!! __('<a href="/affiliate#join">Register</a> in our program and get an affiliate link')!!}
                        </div>
                    </li>
                    <li>
                        <div>{{__('Place a link on your resources — people click on it and make an exchange')}}</div>
                    </li>
                    <li>
                        <div>{!! __('Get 40% profit from each exchange of your referral following the <a href="/terms">Terms of Use</a>') !!}</div>
                    </li>
                </ul>
            </section>
            <section class="affiliate-adv">
                <h2>{{__('Advantages')}}</h2>
                <ul class="affiliate-adv-list">
                    <li><i class="ico gem"></i><h4>{{__('Full transparency')}}</h4>
                        <p>{{__('All exchanges made by your customers are immediately displayed inside your affiliate account
                            on our website')}}</p></li>
                    <li><i class="ico handheart"></i><h4>{{__('High percentage of profit')}}</h4>
                        <p>{{__('You will receive 40% of our profits for each exchange of your referral')}}</p></li>
                    <li><i class="ico advtime"></i><h4>{{__('Low payout minimum')}}</h4>
                        <p>{{__('The minimum amount for withdrawal is only :min_btc BTC',['min_btc'=>0.001])}}</p></li>
                </ul>
            </section>
        </div>
        <section class="affiliate-auth">
            <div class="affiliate-auth-bg">
                <svg width="1738" height="872" viewBox="0 0 1738 872" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="affiliate_sign_bg" clip-path="url(#clip0_442_4387)">
                        <rect id="Rectangle 12" width="1761.6" height="1202" transform="matrix(-1 0 0 1 1749.8 -330)"
                              fill="url(#paint0_linear_442_4387)"/>
                        <g id="shadows">
                            <g filter="url(#filter0_f_442_4387)">
                                <ellipse cx="763.977" cy="515.166" rx="193.876" ry="108.652"
                                         transform="rotate(-37.4623 763.977 515.166)" fill="black" fill-opacity="0.3"/>
                            </g>
                            <g filter="url(#filter1_f_442_4387)">
                                <ellipse cx="1689.86" cy="-150.022" rx="438.467" ry="146.5"
                                         transform="rotate(-37.4623 1689.86 -150.022)" fill="black" fill-opacity="0.6"/>
                            </g>
                            <g filter="url(#filter2_f_442_4387)">
                                <ellipse cx="518.142" cy="92.9783" rx="438.467" ry="146.5"
                                         transform="rotate(-37.4623 518.142 92.9783)" fill="black" fill-opacity="0.6"/>
                            </g>
                        </g>
                        <g id="circlestars">
                            <circle r="1" transform="matrix(-1 0 0 1 1288 162)" fill="white"/>
                            <circle r="1" transform="matrix(-1 0 0 1 839.5 399)" fill="white"/>
                            <circle r="1" transform="matrix(-1 0 0 1 1363 102)" fill="white"/>
                            <circle r="1" transform="matrix(-1 0 0 1 1226 348)" fill="white"/>
                            <circle r="1" transform="matrix(-1 0 0 1 1529 197)" fill="white"/>
                            <circle r="1" transform="matrix(-1 0 0 1 1530 47)" fill="white"/>
                            <circle r="1" transform="matrix(-1 0 0 1 1331 29)" fill="white"/>
                            <circle r="1" transform="matrix(-1 0 0 1 404 399)" fill="white"/>
                            <circle r="1" transform="matrix(-1 0 0 1 944 235)" fill="white"/>
                            <circle r="1" transform="matrix(-1 0 0 1 905.982 413)" fill="white"/>
                            <circle r="1" transform="matrix(-1 0 0 1 998 472)" fill="white"/>
                            <circle r="1" transform="matrix(-1 0 0 1 870 135)" fill="white"/>
                            <circle r="1" transform="matrix(-1 0 0 1 542 115)" fill="white"/>
                            <circle r="1" transform="matrix(-1 0 0 1 670 27)" fill="white"/>
                            <circle r="1" transform="matrix(-1 0 0 1 625.657 330.416)" fill="white"/>
                            <circle r="1" transform="matrix(-1 0 0 1 406 31)" fill="white"/>
                            <circle r="1" transform="matrix(-1 0 0 1 279 113)" fill="white"/>
                            <circle r="1" transform="matrix(-1 0 0 1 227 27)" fill="white"/>
                            <circle r="1" transform="matrix(-1 0 0 1 70.8541 163)" fill="white"/>
                            <circle r="1" transform="matrix(-1 0 0 1 219 233)" fill="white"/>
                            <circle r="1" transform="matrix(-1 0 0 1 540 433.886)" fill="white"/>
                            <circle r="1" transform="matrix(-1 0 0 1 176 408)" fill="white"/>
                            <circle r="1" transform="matrix(-1 0 0 1 135.942 461.129)" fill="white"/>
                            <circle r="1" transform="matrix(-1 0 0 1 170 501)" fill="white"/>
                            <circle r="1" transform="matrix(-1 0 0 1 1123 63)" fill="white"/>
                            <circle r="1" transform="matrix(-1 0 0 1 1035 209)" fill="white"/>
                            <circle r="1" transform="matrix(-1 0 0 1 1232 102)" fill="white"/>
                            <circle r="1" transform="matrix(-1 0 0 1 1248 23)" fill="white"/>
                            <circle r="1" transform="matrix(-1 0 0 1 1570 17)" fill="white"/>
                            <circle r="1" transform="matrix(-1 0 0 1 1423 121)" fill="white"/>
                            <circle r="1" transform="matrix(-1 0 0 1 1246 239)" fill="white"/>
                            <circle r="1" transform="matrix(-1 0 0 1 1085 309)" fill="white"/>
                            <circle r="1" transform="matrix(-1 0 0 1 1109 400)" fill="white"/>
                            <circle r="1" transform="matrix(-1 0 0 1 1064 128)" fill="white"/>
                            <circle r="1" transform="matrix(-1 0 0 1 1403.5 284.931)" fill="white"/>
                            <circle r="0.5" transform="matrix(-1 0 0 1 1343.5 116.5)" fill="white"/>
                            <circle r="0.5" transform="matrix(-1 0 0 1 1385.5 178.5)" fill="white"/>
                            <circle r="0.5" transform="matrix(-1 0 0 1 1166.5 226.5)" fill="white"/>
                            <circle r="0.5" transform="matrix(-1 0 0 1 1437.5 200.5)" fill="white"/>
                            <circle r="0.5" transform="matrix(-1 0 0 1 45.2194 354.77)" fill="white"/>
                            <circle r="0.5" transform="matrix(-1 0 0 1 1571.5 272.916)" fill="white"/>
                            <circle r="0.5" transform="matrix(-1 0 0 1 1566.5 217.5)" fill="white"/>
                            <circle r="0.5" transform="matrix(-1 0 0 1 342.214 514.666)" fill="white"/>
                            <circle r="0.5" transform="matrix(-1 0 0 1 1703.57 227.931)" fill="white"/>
                            <circle r="0.5" transform="matrix(-1 0 0 1 1503.5 23.5)" fill="white"/>
                            <circle r="0.5" transform="matrix(-1 0 0 1 1451.5 63.5)" fill="white"/>
                            <circle r="0.5" transform="matrix(-1 0 0 1 1385.5 21.5)" fill="white"/>
                            <circle r="0.5" transform="matrix(-1 0 0 1 562.023 557.475)" fill="white"/>
                            <circle r="0.5" transform="matrix(-1 0 0 1 1299.5 89.5)" fill="white"/>
                            <circle r="0.5" transform="matrix(-1 0 0 1 1614.37 138.434)" fill="white"/>
                            <circle r="0.5" transform="matrix(-1 0 0 1 1159.5 181.5)" fill="white"/>
                            <circle r="0.5" transform="matrix(-1 0 0 1 1086.5 165.5)" fill="white"/>
                            <circle r="0.5" transform="matrix(-1 0 0 1 657.418 522.296)" fill="white"/>
                            <circle r="0.5" transform="matrix(-1 0 0 1 500.5 298.5)" fill="white"/>
                            <circle r="0.5" transform="matrix(-1 0 0 1 479.5 502.5)" fill="white"/>
                            <circle r="0.5" transform="matrix(-1 0 0 1 822.5 465.5)" fill="white"/>
                            <circle r="0.5" transform="matrix(-1 0 0 1 394.458 459.629)" fill="white"/>
                            <circle r="0.5" transform="matrix(-1 0 0 1 1044.5 423.5)" fill="white"/>
                            <circle r="0.5" transform="matrix(-1 0 0 1 1014.5 349.5)" fill="white"/>
                            <circle r="0.5" transform="matrix(-1 0 0 1 325.74 232.457)" fill="white"/>
                            <circle r="0.5" transform="matrix(-1 0 0 1 222.5 540.5)" fill="white"/>
                            <circle r="0.5" transform="matrix(-1 0 0 1 353.5 602.119)" fill="white"/>
                            <circle r="0.5" transform="matrix(-1 0 0 1 241.5 271.5)" fill="white"/>
                            <circle r="0.5" transform="matrix(-1 0 0 1 228.5 320.5)" fill="white"/>
                            <circle r="0.5" transform="matrix(-1 0 0 1 167.5 349.5)" fill="white"/>
                            <circle r="0.5" transform="matrix(-1 0 0 1 474 436)" fill="white"/>
                            <circle r="0.5" transform="matrix(-1 0 0 1 101.5 387.5)" fill="white"/>
                            <circle r="0.5" transform="matrix(-1 0 0 1 303.674 449.5)" fill="white"/>
                            <circle r="0.5" transform="matrix(-1 0 0 1 332.478 379.5)" fill="white"/>
                            <circle r="0.5" transform="matrix(-1 0 0 1 313.5 308)" fill="white"/>
                            <circle r="0.5" transform="matrix(-1 0 0 1 243.5 510.5)" fill="white"/>
                            <circle r="0.5" transform="matrix(-1 0 0 1 371.781 227.5)" fill="white"/>
                            <circle r="0.5" transform="matrix(-1 0 0 1 581.035 391.73)" fill="white"/>
                            <circle r="0.5" transform="matrix(-1 0 0 1 221.5 181.5)" fill="white"/>
                            <circle r="0.5" transform="matrix(-1 0 0 1 174.5 138.5)" fill="white"/>
                            <circle r="0.5" transform="matrix(-1 0 0 1 114.977 86.4161)" fill="white"/>
                            <circle r="0.5" transform="matrix(-1 0 0 1 360.5 116.5)" fill="white"/>
                            <circle r="0.5" transform="matrix(-1 0 0 1 445.5 124.5)" fill="white"/>
                            <circle r="0.5" transform="matrix(-1 0 0 1 580.535 219.5)" fill="white"/>
                            <circle r="0.5" transform="matrix(-1 0 0 1 47.2194 46.5)" fill="white"/>
                            <circle r="0.5" transform="matrix(-1 0 0 1 523.5 64.5)" fill="white"/>
                            <circle r="0.5" transform="matrix(-1 0 0 1 498.5 14.5)" fill="white"/>
                            <circle r="0.5" transform="matrix(-1 0 0 1 499.5 123.5)" fill="white"/>
                            <circle r="0.5" transform="matrix(-1 0 0 1 632.5 125.5)" fill="white"/>
                            <circle r="0.5" transform="matrix(-1 0 0 1 715.5 38.5)" fill="white"/>
                            <circle r="0.5" transform="matrix(-1 0 0 1 501.5 605.896)" fill="white"/>
                            <circle r="0.5" transform="matrix(-1 0 0 1 277.5 61.5)" fill="white"/>
                            <circle r="0.5" transform="matrix(-1 0 0 1 177.5 42.5)" fill="white"/>
                            <circle r="0.5" transform="matrix(-1 0 0 1 393.458 195.5)" fill="white"/>
                            <circle r="0.5" transform="matrix(-1 0 0 1 766.5 20.5)" fill="white"/>
                            <circle r="0.5" transform="matrix(-1 0 0 1 837.5 79.5)" fill="white"/>
                            <circle r="0.5" transform="matrix(-1 0 0 1 859.5 25.5)" fill="white"/>
                            <circle r="0.5" transform="matrix(-1 0 0 1 134.442 204.367)" fill="white"/>
                            <circle r="0.5" transform="matrix(-1 0 0 1 812.5 200.5)" fill="white"/>
                            <circle r="0.5" transform="matrix(-1 0 0 1 838.5 264.5)" fill="white"/>
                            <circle r="0.5" transform="matrix(-1 0 0 1 799.5 297.5)" fill="white"/>
                            <circle r="0.5" transform="matrix(-1 0 0 1 748.5 239.5)" fill="white"/>
                            <circle r="0.5" transform="matrix(-1 0 0 1 1116.02 29.208)" fill="white"/>
                            <circle r="0.5" transform="matrix(-1 0 0 1 1385.5 332.5)" fill="white"/>
                            <circle r="0.5" transform="matrix(-1 0 0 1 985.5 291.5)" fill="white"/>
                            <circle r="0.5" transform="matrix(-1 0 0 1 420.837 241.5)" fill="white"/>
                            <circle r="0.5" transform="matrix(-1 0 0 1 779.5 270.5)" fill="white"/>
                            <circle r="0.5" transform="matrix(-1 0 0 1 507.466 367.5)" fill="white"/>
                            <circle r="0.5" transform="matrix(-1 0 0 1 751.5 570.5)" fill="white"/>
                            <circle r="0.5" transform="matrix(-1 0 0 1 861.5 506.5)" fill="white"/>
                            <circle r="0.5" transform="matrix(-1 0 0 1 932.5 509.5)" fill="white"/>
                            <circle r="0.5" transform="matrix(-1 0 0 1 579.535 536.035)" fill="white"/>
                            <circle r="0.5" transform="matrix(-1 0 0 1 1093.5 472.5)" fill="white"/>
                            <circle r="0.5" transform="matrix(-1 0 0 1 1252.5 407.5)" fill="white"/>
                            <circle r="0.5" transform="matrix(-1 0 0 1 1371 401.5)" fill="white"/>
                            <circle r="0.5" transform="matrix(-1 0 0 1 1285.5 386.5)" fill="white"/>
                            <circle r="0.5" transform="matrix(-1 0 0 1 931.5 41.5)" fill="white"/>
                            <circle r="0.5" transform="matrix(-1 0 0 1 588.5 103.5)" fill="white"/>
                            <circle r="0.5" transform="matrix(-1 0 0 1 888.5 364.5)" fill="white"/>
                            <circle r="0.5" transform="matrix(-1 0 0 1 798.5 365.5)" fill="white"/>
                            <circle r="0.5" transform="matrix(-1 0 0 1 750.5 506.5)" fill="white"/>
                            <circle r="0.5" transform="matrix(-1 0 0 1 428.5 558.475)" fill="white"/>
                            <circle r="0.5" transform="matrix(-1 0 0 1 764.5 424.5)" fill="white"/>
                            <circle r="0.5" transform="matrix(-1 0 0 1 370.781 390.73)" fill="white"/>
                            <circle r="0.5" transform="matrix(-1 0 0 1 46.2194 458.629)" fill="white"/>
                            <circle r="0.5" transform="matrix(-1 0 0 1 1156.5 332.5)" fill="white"/>
                            <circle r="0.5" transform="matrix(-1 0 0 1 645.58 381.5)" fill="white"/>
                            <circle r="0.5" transform="matrix(-1 0 0 1 671.5 443.818)" fill="white"/>
                            <circle r="0.5" transform="matrix(-1 0 0 1 1253.5 272.5)" fill="white"/>
                            <circle r="0.5" transform="matrix(-1 0 0 1 284.663 199.5)" fill="white"/>
                            <circle r="0.5" transform="matrix(-1 0 0 1 984.5 381.5)" fill="white"/>
                            <circle r="0.5" transform="matrix(-1 0 0 1 1662.98 183.5)" fill="white"/>
                            <circle r="0.5" transform="matrix(-1 0 0 1 1684.88 48)" fill="white"/>
                            <circle r="0.5" transform="matrix(-1 0 0 1 1559.5 120.5)" fill="white"/>
                            <circle r="0.5" transform="matrix(-1 0 0 1 459.05 211.416)" fill="white"/>
                            <circle r="0.5" transform="matrix(-1 0 0 1 1690.36 138.434)" fill="white"/>
                            <circle r="0.5" transform="matrix(-1 0 0 1 59.172 272.5)" fill="white"/>
                            <circle r="0.5" transform="matrix(-1 0 0 1 1237.5 58.5)" fill="white"/>
                            <circle r="0.5" transform="matrix(-1 0 0 1 517.642 241)" fill="white"/>
                            <circle r="0.5" transform="matrix(-1 0 0 1 1314.5 218.5)" fill="white"/>
                            <circle r="0.5" transform="matrix(-1 0 0 1 1633.65 72.5)" fill="white"/>
                        </g>
                        <path id="affiliate_sign_bg_path" fill-rule="evenodd" clip-rule="evenodd"
                              d="M1132.58 478.538C1129.67 477.9 1126.77 477.378 1123.88 476.962C1113.67 473.853 1103.86 471.94 1094.51 471.332C1065.93 469.455 1041.59 479.767 1023.07 505.404C1002.62 533.709 970.572 542.044 948.572 540.965C943.75 540.724 939.414 540.03 935.79 538.995C927.973 536.762 917.27 534.097 905.47 533.516C886.823 532.584 865.427 536.851 848.361 556.265C825.866 581.855 807.132 596.165 775.951 594.64C768.564 594.273 760.479 593.018 751.481 590.816C745.698 589.4 740.073 588.607 734.621 588.341C695.699 586.406 665.542 611.277 648.693 627.278C632.017 643.116 603.753 663.297 565.16 661.41C559.344 661.121 553.294 660.331 547.014 658.95C544.068 658.302 541.123 657.775 538.188 657.356C496.843 644.776 462.063 651.826 437.506 685.816C412.548 720.363 370.31 725.162 350.151 719.404C329.993 713.646 290.635 705.009 262.797 736.677C234.958 768.346 212.88 782.74 165.843 771.225C118.805 759.709 82.3276 789.458 63.1288 807.691C43.9301 825.924 9.37207 849.915 -38.625 839.359C-77.0227 830.914 -115.42 842.879 -129.819 849.915V1059.12H602.616V878.708H1188.25V698.295H1773.82V297.165C1767.1 301.645 1745.21 307.913 1711.42 297.165C1669.19 283.73 1633.67 290.448 1608.71 324.995C1583.75 359.542 1541.51 364.34 1521.35 358.582C1501.2 352.824 1461.84 344.188 1434 375.856C1406.16 407.524 1384.08 421.919 1337.05 410.403C1290.01 398.887 1253.53 428.636 1234.33 446.869C1215.13 465.103 1180.58 489.094 1132.58 478.538Z"
                              fill="url(#paint1_linear_442_4387)"/>
                        <g id="affiliate_sign_bg_stars">
                            <path
                                d="M1590 221.931L1591.13 226.187L1595 227.431L1591.13 228.676L1590 232.931L1588.87 228.676L1585 227.431L1588.87 226.187L1590 221.931Z"
                                fill="white"/>
                            <path
                                d="M1512 90L1513.13 93.8686L1517 95L1513.13 96.1314L1512 100L1510.87 96.1314L1507 95L1510.87 93.8686L1512 90Z"
                                fill="white"/>
                            <path
                                d="M1330 303.589L1331.13 307.458L1335 308.589L1331.13 309.72L1330 313.589L1328.87 309.72L1325 308.589L1328.87 307.458L1330 303.589Z"
                                fill="white"/>
                            <path
                                d="M1164 376L1165.13 380.255L1169 381.5L1165.13 382.745L1164 387L1162.87 382.745L1159 381.5L1162.87 380.255L1164 376Z"
                                fill="white"/>
                            <path
                                d="M1015.5 48L1016.74 52.2555L1021 53.5L1016.74 54.7445L1015.5 59L1014.26 54.7445L1010 53.5L1014.26 52.2555L1015.5 48Z"
                                fill="white"/>
                            <path
                                d="M760.5 309L761.745 313.255L766 314.5L761.745 315.745L760.5 320L759.255 315.745L755 314.5L759.255 313.255L760.5 309Z"
                                fill="white"/>
                            <path
                                d="M220.5 482L221.745 486.255L226 487.5L221.745 488.745L220.5 493L219.255 488.745L215 487.5L219.255 486.255L220.5 482Z"
                                fill="white"/>
                            <path
                                d="M195.5 97L196.745 101.255L201 102.5L196.745 103.745L195.5 108L194.255 103.745L190 102.5L194.255 101.255L195.5 97Z"
                                fill="white"/>
                            <path
                                d="M473.5 73L474.745 77.2555L479 78.5L474.745 79.7445L473.5 84L472.255 79.7445L468 78.5L472.255 77.2555L473.5 73Z"
                                fill="white"/>
                        </g>
                        <g id="planet1">
                            <g filter="url(#filter3_f_442_4387)">
                                <circle cx="1580.53" cy="466.5" r="157.5" fill="#76B8DE" fill-opacity="0.29"/>
                            </g>
                            <g>
                                <g>
                                    <path
                                        d="M1786.46 325.376C1790.26 332.813 1788.21 342.937 1780.96 355.009C1773.72 367.055 1761.38 380.898 1744.89 395.664C1711.9 425.191 1662.39 458.329 1604.18 488.066C1545.96 517.803 1490.1 538.494 1446.84 547.913C1425.21 552.623 1406.76 554.508 1392.76 553.311C1378.73 552.111 1369.33 547.834 1365.53 540.396C1361.73 532.959 1363.77 522.835 1371.02 510.763C1378.26 498.717 1390.6 484.874 1407.1 470.108C1440.08 440.581 1489.59 407.444 1547.8 377.706C1606.02 347.969 1661.89 327.279 1705.14 317.86C1726.77 313.149 1745.22 311.264 1759.22 312.461C1773.26 313.661 1782.66 317.938 1786.46 325.376Z"
                                        stroke="#9DC1F8"/>
                                </g>
                                <g filter="url(#filter4_f_442_4387)">
                                    <ellipse cx="1582.41" cy="459.129" rx="158.255" ry="159.5"
                                             transform="rotate(-56.3535 1582.41 459.129)" fill="white"
                                             fill-opacity="0.18"/>
                                </g>
                                <circle cx="1582.5" cy="467.46" r="166.175" transform="rotate(-56.3535 1582.5 467.46)"
                                        fill="white"/>
                                <g>
                                    <mask id="mask0_442_4387" style="mask-type:alpha" maskUnits="userSpaceOnUse"
                                          x="1416" y="303" width="341" height="341">
                                        <path
                                            d="M1680.03 332.318C1710.59 352.655 1732.41 381.193 1744.53 413.073C1747.2 420.092 1752.57 419.261 1753.65 422.748C1754.49 428.159 1755.5 429.839 1756.55 435.639C1757.08 438.561 1752.64 441 1753.69 447.884C1759.85 488.17 1751.59 530.788 1727.23 567.387C1675.35 645.334 1570.11 666.466 1492.16 614.587C1414.21 562.708 1393.08 457.464 1444.96 379.518C1459.04 358.359 1477.06 341.387 1497.39 328.925C1500.51 327.017 1498.08 322.765 1500.12 321.834C1505.21 319.505 1506.28 318.658 1510.89 316.275C1512.26 315.653 1516.41 318.827 1520.03 317.299C1570.71 295.912 1630.81 299.559 1680.03 332.318Z"
                                            fill="url(#paint2_radial_442_4387)"/>
                                    </mask>
                                    <g mask="url(#mask0_442_4387)">
                                        <ellipse id="Ellipse 95" cx="1589.06" cy="475.425" rx="169.537" ry="182.788"
                                                 transform="rotate(-56.3535 1589.06 475.425)"
                                                 fill="url(#paint3_linear_442_4387)"/>
                                        <path
                                            d="M1748.09 476.912C1717.02 494.993 1643.36 518.076 1597.31 465.754C1539.75 400.351 1489.28 379.996 1390.96 441.957"
                                            stroke="url(#paint4_linear_442_4387)" stroke-opacity="0.03"
                                            stroke-width="3"/>
                                        <path
                                            d="M1754.68 443.989C1723.61 462.07 1649.95 485.152 1603.9 432.831C1546.34 367.428 1495.88 347.073 1397.55 409.034"
                                            stroke="url(#paint5_linear_442_4387)" stroke-opacity="0.3"
                                            stroke-width="2"/>
                                        <path
                                            d="M1759.47 427.128C1728.4 445.209 1654.74 468.292 1608.69 415.97C1551.13 350.567 1500.67 330.212 1402.34 392.173"
                                            stroke="url(#paint6_linear_442_4387)" stroke-opacity="0.3"
                                            stroke-width="2"/>
                                        <path
                                            d="M1748.9 361.426C1742.74 408.337 1680.66 434.23 1631.2 385.121C1569.38 323.734 1507.27 237.736 1413.34 306.163"
                                            stroke="url(#paint7_linear_442_4387)" stroke-opacity="0.05"
                                            stroke-width="28"/>
                                        <path
                                            d="M1510.55 318.75C1512.94 316.932 1511.98 315.448 1511.2 314.933C1510.42 313.937 1500.56 316.39 1497.93 321.562C1495.3 326.735 1507.57 321.023 1510.55 318.75Z"
                                            stroke="url(#paint8_linear_442_4387)"/>
                                        <path
                                            d="M1509.88 317.476C1512.26 315.621 1511.3 314.109 1510.53 313.585C1509.75 312.572 1499.88 315.078 1497.25 320.352C1494.62 325.625 1506.89 319.794 1509.88 317.476Z"
                                            fill="#1F0836"/>
                                        <path
                                            d="M1735.69 309.841C1731.45 341.801 1689.2 359.519 1655.63 326.135C1613.66 284.404 1571.54 225.911 1507.57 272.642"
                                            stroke="url(#paint9_linear_442_4387)" stroke-opacity="0.05"
                                            stroke-width="39"/>
                                    </g>
                                </g>
                                <g>
                                    <mask id="mask1_442_4387" style="mask-type:alpha" maskUnits="userSpaceOnUse"
                                          x="1416" y="303" width="341" height="341">
                                        <path
                                            d="M1680.03 332.318C1710.59 352.655 1732.41 381.193 1744.53 413.073C1747.2 420.092 1752.57 419.261 1753.65 422.748C1754.49 428.159 1755.5 429.839 1756.55 435.639C1757.08 438.561 1752.64 441 1753.69 447.884C1759.85 488.17 1751.59 530.788 1727.23 567.387C1675.35 645.334 1570.11 666.466 1492.16 614.587C1414.21 562.708 1393.08 457.464 1444.96 379.518C1459.04 358.359 1477.06 341.387 1497.39 328.925C1500.51 327.017 1498.08 322.765 1500.12 321.834C1505.21 319.505 1506.28 318.658 1510.89 316.275C1512.26 315.653 1516.41 318.827 1520.03 317.299C1570.71 295.912 1630.81 299.559 1680.03 332.318Z"
                                            fill="url(#paint10_radial_442_4387)"/>
                                    </mask>
                                    <g mask="url(#mask1_442_4387)">
                                        <path
                                            d="M1786.46 325.375C1788.65 329.676 1788.9 334.982 1787.16 341.21C1785.42 347.441 1781.69 354.559 1775.99 362.433C1764.58 378.182 1745.67 396.408 1720.82 415.582C1695.96 434.752 1665.91 454.294 1633.18 472.569C1600.45 490.844 1566 507.317 1532.72 520.607C1499.43 533.898 1468.29 543.615 1441.91 548.948C1415.5 554.286 1394.69 555.065 1381.17 551.288C1374.42 549.402 1369.63 546.421 1366.8 542.477C1363.97 538.544 1363.03 533.585 1364.11 527.633C1366.27 515.684 1376.47 500.218 1393.99 482.526"
                                            stroke="#9DC1F8"/>
                                        <g filter="url(#filter5_f_442_4387)">
                                            <circle cx="1542.01" cy="346.766" r="64.9905" fill="#76B8DE"
                                                    fill-opacity="0.35"/>
                                        </g>
                                        <g filter="url(#filter6_f_442_4387)">
                                            <circle cx="1480.21" cy="346.766" r="24.5046" fill="#7686DE"
                                                    fill-opacity="0.65"/>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </g>
                        <g id="mount1">
                            <mask id="mask2_442_4387" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="1029"
                                  y="541" width="481" height="103">
                                <path
                                    d="M1460.02 545.414C1466.55 552.061 1488.87 569.677 1503.03 573.665L1509.01 626.845L1480.16 643.464C1321.91 640.029 1010.32 633.16 1029.92 633.16C1049.52 633.16 1076.92 610.78 1088.17 599.59C1098.88 599.59 1128.02 599.059 1158.95 596.931C1189.87 594.804 1220.83 564.58 1232.44 549.734C1234.26 549.624 1239.96 549.469 1248.23 549.734C1256.51 550 1262.21 546.965 1264.02 545.414C1326.63 542.644 1453.48 538.766 1460.02 545.414Z"
                                    fill="#D9D9D9"/>
                            </mask>
                            <g mask="url(#mask2_442_4387)">
                                <path
                                    d="M1460.02 545.414C1466.55 552.061 1488.87 569.677 1503.03 573.665L1509.01 626.845L1480.16 643.464C1321.91 640.029 1010.32 633.16 1029.92 633.16C1049.52 633.16 1076.92 610.78 1088.17 599.59C1098.88 599.59 1128.02 599.059 1158.95 596.931C1189.87 594.804 1220.83 564.58 1232.44 549.734C1234.26 549.624 1239.96 549.469 1248.23 549.734C1256.51 550 1262.21 546.965 1264.02 545.414C1326.63 542.644 1453.48 538.766 1460.02 545.414Z"
                                    fill="url(#paint11_linear_442_4387)"/>
                                <path
                                    d="M1389.78 553.723L1222.64 556.715L1223.19 560.371L1470.36 559.373H1230.81L1438.78 557.712L1230.81 558.709L1453.48 556.715L1229.72 558.044L1389.78 553.723Z"
                                    fill="#603F71"/>
                                <path
                                    d="M1313.74 544.084L1481.25 546.477L1480.7 549.402L1232.99 548.604L1473.06 548.604L1264.63 547.275L1473.06 548.073L1249.9 546.477L1474.16 547.541L1313.74 544.084Z"
                                    fill="#008FDF" fill-opacity="0.41"/>
                                <path
                                    d="M1045.94 554.055L2302.25 572.004L2298.16 593.94L440.298 587.957L2240.87 587.957L677.646 577.986L2240.87 583.969L567.156 572.003L2249.05 579.981L1045.94 554.055Z"
                                    fill="black" fill-opacity="0.23"/>
                                <path
                                    d="M1342.05 577.321L1509.56 579.714L1509.01 582.639L1261.3 581.842L1501.37 581.842L1292.95 580.512L1501.37 581.31L1278.21 579.714L1502.47 580.778L1342.05 577.321Z"
                                    fill="#008FDF" fill-opacity="0.41"/>
                                <path
                                    d="M1282.91 568.015L1144.79 570.408L1145.24 573.333L1349.5 572.535L1151.54 572.535L1323.4 571.206L1151.54 572.003L1335.55 570.408L1150.64 571.472L1282.91 568.015Z"
                                    fill="#008FDF" fill-opacity="0.41"/>
                                <path
                                    d="M1216.11 597.928H1084.36L1068.03 604.576L1142.61 603.911H1081.64L1082.73 603.246H1196.51L1080 602.582L1171.47 602.249L1081.64 601.917L1176.91 601.252H1080.55C1079.68 601.252 1080.55 600.809 1081.09 600.587L1178.55 599.923L1089.26 599.59L1202.5 598.926H1087.63L1216.11 597.928Z"
                                    fill="#008FDF" fill-opacity="0.41"/>
                                <path
                                    d="M1481.25 608.565H984.272L922.663 633.825L1204.01 631.299H974.004L978.111 628.773H1407.32L967.843 626.247L1312.85 624.984L974.004 623.721L1333.39 621.195H969.897C966.611 621.195 969.897 619.511 971.95 618.669L1339.55 616.143L1002.75 614.88L1429.91 612.354H996.594L1481.25 608.565Z"
                                    fill="black" fill-opacity="0.41"/>
                                <path
                                    d="M1432.25 570.674L1564 570.674L1580.33 564.026L1505.75 564.691L1566.72 564.691L1565.64 565.356L1451.85 565.356L1568.36 566.021L1476.89 566.353L1566.72 566.685L1471.45 567.35L1567.81 567.35C1568.68 567.35 1567.81 567.793 1567.27 568.015L1469.82 568.68L1559.1 569.012L1445.86 569.677L1560.74 569.677L1432.25 570.674Z"
                                    fill="#008FDF" fill-opacity="0.41"/>
                            </g>
                        </g>
                        <g id="mount2">
                            <path
                                d="M1667.23 508.388C1642.15 512.763 1481.62 538.284 1352.45 656.406L1787.95 673.935C1787.95 673.935 1812.39 541.074 1802.64 500.459C1799.49 487.352 1674.88 507.054 1667.23 508.388Z"
                                fill="#9B7CB0"/>
                            <g>
                                <mask id="mask3_442_4387" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="1351"
                                      y="496" width="526" height="199">
                                    <path
                                        d="M1666.15 509.416C1641.07 513.791 1480.54 539.311 1351.36 657.434L1370.17 694.985L1831.63 688.693C1831.63 688.693 1879.94 566.412 1876.17 517.771C1873.09 478.107 1680.23 506.96 1666.15 509.416Z"
                                        fill="url(#paint12_linear_442_4387)"/>
                                </mask>
                                <g mask="url(#mask3_442_4387)">
                                    <path
                                        d="M1675.5 460.156L1318.94 588.033L1370.8 694.985L1730.74 698.96L1917.05 552.928L1675.5 460.156Z"
                                        fill="url(#paint13_linear_442_4387)"/>
                                    <path
                                        d="M1576.79 569.571C1589.58 526.697 1470.92 575.283 1409.99 604.935C1376.55 628.146 1309.16 675.152 1307.15 677.486C1305.15 679.819 1554.84 709.26 1673.67 705.858C1684.02 696.865 1689.54 639.934 1679 626.81C1665.83 610.404 1649.22 627.539 1603.13 637.018C1557.04 646.497 1560.8 623.164 1576.79 569.571Z"
                                        fill="black" fill-opacity="0.15"/>
                                    <path d="M1435.07 657.799C1514.54 631.004 1692.56 612.591 1746.9 616.112"
                                          stroke="white" stroke-opacity="0.2"/>
                                    <path d="M1411.56 608.216C1489.63 546.238 1608.46 629.362 1667.72 588.894"
                                          stroke="white" stroke-opacity="0.2"/>
                                    <path
                                        d="M1670.54 575.537C1655.99 580.882 1641.96 582.454 1631.04 580.697C1620.1 578.937 1612.41 573.864 1610.29 566.055C1608.16 558.246 1611.95 548.958 1620.04 540.207C1628.11 531.473 1640.37 523.383 1654.92 518.037C1669.47 512.692 1683.51 511.12 1694.43 512.877C1705.37 514.637 1713.06 519.71 1715.18 527.519C1717.3 535.328 1713.52 544.616 1705.43 553.367C1697.36 562.101 1685.1 570.191 1670.54 575.537Z"
                                        stroke="white" stroke-opacity="0.2"/>
                                </g>
                            </g>
                        </g>
                        <g id="mount3">
                            <path
                                d="M293.358 586.576C310.421 603.279 320.099 622.471 334.233 625.711C303.767 647.253 97.0797 576.752 -18.6054 540.759C42.7652 504.752 74.9204 532.24 88.3824 540.221C101.844 548.202 109.422 543.98 135.544 536.581C161.666 529.182 171.586 535.062 195.124 551.889C218.662 568.716 246.978 564.723 257.216 566.675C267.453 568.627 272.03 565.698 293.358 586.576Z"
                                fill="#BDCBEE"/>
                            <g>
                                <mask id="mask4_442_4387" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="-73"
                                      y="535" width="435" height="129">
                                    <path
                                        d="M297.567 604.529C314.629 621.232 347.162 631.888 361.296 635.128C340.149 650.081 52.5393 682.553 -47.3401 649.819C-91.3553 635.393 -75.0223 584.106 -23.8419 554.078C37.5288 518.071 69.684 545.559 83.146 553.54C96.6079 561.52 104.185 557.299 130.308 549.9C156.43 542.501 166.349 548.381 189.888 565.208C213.426 582.034 241.741 578.042 251.979 579.994C262.217 581.945 276.239 583.651 297.567 604.529Z"
                                        fill="url(#paint14_linear_442_4387)"/>
                                </mask>
                                <g mask="url(#mask4_442_4387)">
                                    <path
                                        d="M297.058 604.419C314.12 621.122 346.653 631.777 360.787 635.018C330.321 656.56 91.3342 589.96 -24.3509 553.967C37.0198 517.96 69.1749 545.449 82.6369 553.429C96.0989 561.41 103.676 557.188 129.799 549.789C155.921 542.39 165.84 548.271 189.379 565.097C212.917 581.924 241.233 577.932 251.47 579.883C261.708 581.835 275.73 583.541 297.058 604.419Z"
                                        fill="#9D6BB5"/>
                                    <path
                                        d="M297.456 605.039C314.519 621.741 347.052 632.397 361.185 635.637C365.082 696.525 23.5953 710.714 -92.5204 687.062C-163.949 672.512 -92.3652 585.035 -23.9521 554.587C37.4185 518.58 69.5736 546.068 83.0356 554.049C96.4976 562.029 104.075 557.808 130.197 550.409C156.32 543.01 166.239 548.89 189.777 565.717C213.316 582.543 241.631 578.551 251.869 580.503C262.106 582.455 276.128 584.16 297.456 605.039Z"
                                        fill="url(#paint15_linear_442_4387)"/>
                                    <path
                                        d="M190.163 575.542C186.612 581.044 180.117 583.974 172.399 584.192C164.684 584.41 155.801 581.911 147.595 576.615C139.39 571.319 133.453 564.254 130.473 557.134C127.493 550.012 127.487 542.887 131.038 537.385C134.589 531.883 141.084 528.952 148.802 528.734C156.517 528.516 165.4 531.016 173.606 536.312C181.811 541.607 187.748 548.672 190.728 555.792C193.708 562.914 193.714 570.04 190.163 575.542Z"
                                        stroke="black" stroke-opacity="0.5"/>
                                    <path
                                        d="M189.562 566.407C186.012 571.909 179.517 574.839 171.799 575.057C164.084 575.275 155.2 572.775 146.995 567.48C138.789 562.184 132.852 555.119 129.873 547.999C126.892 540.877 126.887 533.752 130.438 528.249C133.989 522.747 140.484 519.817 148.201 519.599C155.916 519.381 164.8 521.881 173.005 527.176C181.211 532.472 187.148 539.537 190.128 546.657C193.108 553.779 193.113 560.904 189.562 566.407Z"
                                        stroke="black" stroke-opacity="0.5"/>
                                    <path
                                        d="M296.461 597.031C292.91 602.533 286.415 605.463 278.697 605.681C270.982 605.899 262.099 603.4 253.893 598.104C245.688 592.809 239.751 585.743 236.771 578.624C233.791 571.501 233.785 564.376 237.336 558.874C240.887 553.372 247.382 550.441 255.1 550.223C262.815 550.005 271.698 552.505 279.904 557.801C288.109 563.096 294.047 570.161 297.026 577.281C300.006 584.404 300.012 591.529 296.461 597.031Z"
                                        stroke="black" stroke-opacity="0.5"/>
                                    <path
                                        d="M58.9897 546.643C55.4388 552.146 48.9441 555.076 41.2263 555.294C33.5113 555.512 24.6278 553.012 16.4222 547.717C8.21664 542.421 2.27957 535.356 -0.699864 528.236C-3.68037 521.114 -3.68575 513.988 -0.134804 508.486C3.41614 502.984 9.91089 500.054 17.6287 499.836C25.3437 499.618 34.2272 502.117 42.4327 507.413C50.6383 512.709 56.5754 519.774 59.5548 526.894C62.5353 534.016 62.5407 541.141 58.9897 546.643Z"
                                        stroke="black" stroke-opacity="0.5"/>
                                    <path
                                        d="M149.192 541.465C156.697 544.957 91.1823 585.823 76.3025 562.984C61.4226 540.144 141.687 537.973 149.192 541.465Z"
                                        fill="black" fill-opacity="0.23"/>
                                    <path
                                        d="M190.303 574.359C205.553 581.714 235.368 578.349 248.369 575.747C236.701 575.884 209.798 574.425 195.522 567.494C177.677 558.831 171.241 565.165 190.303 574.359Z"
                                        fill="black" fill-opacity="0.25"/>
                                </g>
                            </g>
                        </g>
                        <g id="ground">
                            <mask id="mask5_442_4387" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="-67" y="630"
                                  width="1882" height="308">
                                <path
                                    d="M1776.94 640.166C1203.76 626.054 183.327 628.225 -66.3538 640.166L-48.9845 937.612H1813.85C1817.05 830.76 1784.62 637.379 1776.94 640.166Z"
                                    fill="url(#paint16_linear_442_4387)"/>
                            </mask>
                            <g mask="url(#mask5_442_4387)">
                                <path
                                    d="M1771.51 591.316C1121.5 569.713 167.6 594.256 -64.1827 603.257L-83.7229 946.296H1762.83C1766.03 839.444 1779.2 588.528 1771.51 591.316Z"
                                    fill="url(#paint17_linear_442_4387)"/>
                                <path
                                    d="M1417.76 819.525C1373.53 910.199 1029.89 979.434 863.596 1002.72L605.603 1100.24L333.131 1042.26C310.754 1000.52 283.112 888.321 351.559 773.397C437.118 629.743 1166.34 703.547 1226.89 707.501C1287.44 711.455 1378.59 615.746 578.285 632.535C395.876 636.362 346.365 622.743 334.935 616.15C335.356 619.137 334.136 624.32 328.038 632.535L266 558.574C473.974 551.985 942.574 544.868 1153.18 569.118C1416.44 599.43 1473.04 706.183 1417.76 819.525Z"
                                    fill="#98E6FF" fill-opacity="0.12"/>
                                <path
                                    d="M-177 810.522C-40.7019 855.996 203.661 956.688 90.7285 995.665C-50.4374 1044.39 3.10825 742.311 343.854 781.288C684.599 820.266 905.272 990.793 970.176 972.929C1035.08 955.064 1213.57 906.342 1135.68 791.033C1057.8 675.724 559.659 909.59 726.786 1075.24"
                                    stroke="white" stroke-opacity="0.33" stroke-width="0.5"/>
                                <path
                                    d="M1389.52 847.208C1474.84 848.101 1692.21 828.19 1758.49 820.371L1750.89 624.968C1637.58 621.245 1331.98 629.373 1239.56 682.994C1124.04 750.02 1377.3 776.83 1480.61 785.767C1583.92 794.704 1282.89 846.091 1389.52 847.208Z"
                                    stroke="white" stroke-opacity="0.33" stroke-width="0.5"/>
                            </g>
                        </g>
                        <g id="planet2">
                            <mask id="mask6_442_4387" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="665" y="73"
                                  width="132" height="132">
                                <circle cx="730.934" cy="138.934" r="65.9335" transform="rotate(-180 730.934 138.934)"
                                        fill="#D9D9D9"/>
                            </mask>
                            <g mask="url(#mask6_442_4387)">
                                <circle cx="730.934" cy="138.934" r="65.9335" transform="rotate(-180 730.934 138.934)"
                                        fill="white"/>
                                <circle cx="728.492" cy="136.492" r="65.9335" transform="rotate(-180 728.492 136.492)"
                                        fill="url(#paint18_radial_442_4387)"/>
                                <rect id="Rectangle 858" x="796.867" y="121.84" width="129.425" height="24.4198"
                                      transform="rotate(-180 796.867 121.84)" fill="#AB76CC" fill-opacity="0.28"/>
                                <rect id="Rectangle 859" x="784.657" y="204.867" width="105.005" height="14.6519"
                                      transform="rotate(-180 784.657 204.867)" fill="#AB76CC" fill-opacity="0.28"/>
                                <rect id="Rectangle 860" x="809.077" y="148.701" width="153.845" height="9.76793"
                                      transform="rotate(-180 809.077 148.701)" fill="#AB76CC" fill-opacity="0.28"/>
                                <circle cx="704.072" cy="124.282" r="65.9335" transform="rotate(-180 704.072 124.282)"
                                        fill="black" fill-opacity="0.17"/>
                            </g>
                        </g>
                        <g id="mount4">
                            <rect id="Rectangle 864" x="1359" y="745.405" width="176" height="11" rx="5.5"
                                  fill="white"/>
                            <rect id="Rectangle 865" x="1283" y="768.405" width="175" height="10" rx="5" fill="white"/>
                            <rect id="Rectangle 866" x="1250" y="745.405" width="77" height="11" rx="5.5" fill="white"/>
                            <g>
                                <mask id="mask7_442_4387" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="1258"
                                      y="683" width="270" height="91">
                                    <path
                                        d="M1287.37 773.446H1452.94L1426.09 750.283H1527.89L1433.92 683L1417.14 705.06H1344.43L1258.29 750.283H1309.75L1287.37 773.446Z"
                                        fill="#D9D9D9"/>
                                </mask>
                                <g mask="url(#mask7_442_4387)">
                                    <path
                                        d="M1287.37 773.446H1452.94L1426.09 750.283H1527.89L1433.92 683L1417.14 705.06H1344.43L1258.29 750.283H1309.75L1287.37 773.446Z"
                                        fill="url(#paint19_linear_442_4387)"/>
                                    <g>
                                        <path
                                            d="M1341.78 717.787L1287.86 773.445L1366.13 794.318H1328.73L1273.07 784.751L1253.07 771.706L1251.33 744.746L1294.82 724.744L1341.78 717.787Z"
                                            fill="black" fill-opacity="0.36"/>
                                        <path d="M1392.22 719.526L1452.23 773.445L1490.49 753.443L1392.22 719.526Z"
                                              fill="black" fill-opacity="0.36"/>
                                        <path d="M1447.88 724.744L1416.57 705.611L1432.22 678.652L1447.88 724.744Z"
                                              fill="black" fill-opacity="0.36"/>
                                        <path
                                            d="M1392.22 753.443L1413.96 775.185L1366.13 777.794L1379.17 744.746L1392.22 760.4V753.443Z"
                                            fill="black" fill-opacity="0.36"/>
                                    </g>
                                    <path
                                        d="M1373.82 695.175L1263.51 705.35L1263.87 717.787L1427.01 714.395L1268.9 714.395L1406.16 708.742L1268.9 712.134L1415.87 705.35L1268.18 709.873L1373.82 695.175Z"
                                        fill="#D9B75F" fill-opacity="0.23"/>
                                    <path
                                        d="M1424.73 679.212L1450.91 684.275L1453.31 696.478L1416.92 700.414L1451.53 693.378L1420.36 693.947L1451.08 691.162L1417.56 691.055L1450.79 688.914L1424.73 679.212Z"
                                        fill="#D9B75F" fill-opacity="0.23"/>
                                    <path
                                        d="M1495.71 709.96L1560.93 717.091L1560.31 743.877L1422.66 743.877L1551.64 736.572L1412.22 731.701L1551.64 731.701L1400.05 724.396L1552.88 726.831L1495.71 709.96Z"
                                        fill="black" fill-opacity="0.23"/>
                                    <path
                                        d="M1327.3 731.701L1265.25 738.65L1265.84 764.749L1396.8 764.749L1274.08 757.631L1406.73 752.886L1274.08 752.886L1418.31 745.768L1272.91 748.14L1327.3 731.701Z"
                                        fill="black" fill-opacity="0.23"/>
                                </g>
                            </g>
                        </g>
                        <g id="mount5">
                            <rect id="Rectangle 861" x="253.942" y="748.931" width="176" height="14" rx="7"
                                  fill="white"/>
                            <rect id="Rectangle 862" x="133.942" y="778.931" width="176" height="13" rx="6.5"
                                  fill="white"/>
                            <rect id="Rectangle 863" x="-15.058" y="800.931" width="286" height="19" rx="9.5"
                                  fill="white"/>
                            <g>
                                <mask id="mask8_442_4387" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="-16"
                                      y="615" width="432" height="196">
                                    <path
                                        d="M118.924 615.874L39.7656 638.701L-15.058 810.638H260.691L225.904 785.417H298.957L260.691 755.849H415.492C379.836 723.671 316.35 722.801 273.736 716.714C239.645 711.844 216.048 689.174 208.511 678.448C156.331 678.448 126.171 640.225 118.924 615.874Z"
                                        fill="#D9D9D9"/>
                                </mask>
                                <g mask="url(#mask8_442_4387)">
                                    <path
                                        d="M118.163 585.532L-39.9935 585.532L-36.6124 829.657L326.19 825.111L459.743 756.221L118.163 585.532Z"
                                        fill="url(#paint20_linear_442_4387)"/>
                                    <g>
                                        <path d="M148.504 708.887L225.904 785.418L263.3 790.636L148.504 708.887Z"
                                              fill="black" fill-opacity="0.36"/>
                                        <path d="M225.904 726.28L271.127 763.676H318.09L225.904 726.28Z" fill="black"
                                              fill-opacity="0.36"/>
                                        <path
                                            d="M167.637 778.46L207.641 810.638L219.011 821.5L-95.6808 835.472L-81.735 670.521L142.26 587.169L-11.5995 726.28L-18.2595 814.545L32.095 749.761V766.982L87.8224 676.343L162.419 755.849L112.847 749.761L162.419 810.638L167.637 778.46Z"
                                            fill="black" fill-opacity="0.36"/>
                                        <path
                                            d="M316.35 757.588C324.177 739.325 392.011 738.456 397.229 738.456L423.319 757.588C385.054 763.676 310.089 772.199 316.35 757.588Z"
                                            fill="black" fill-opacity="0.36"/>
                                    </g>
                                    <path
                                        d="M36.2781 646.914L362.532 684.484L361.469 730.403L-121.004 717.879L346.591 717.879L-59.3663 697.007L346.591 709.531L-88.0596 684.484L348.717 701.182L36.2781 646.914Z"
                                        fill="black" fill-opacity="0.23"/>
                                    <path
                                        d="M152.026 657.633L-87.3829 670.156L-86.6031 685.462L267.442 681.288L-75.6854 681.288L222.211 674.33L-75.6854 678.505L243.267 670.156L-77.2451 675.722L152.026 657.633Z"
                                        fill="#D9B75F" fill-opacity="0.23"/>
                                    <path
                                        d="M50.936 623.958L248.097 636.481L247.454 651.788L-44.1121 647.613L238.463 647.613L-6.86348 640.656L238.463 644.83L-24.2033 636.481L239.748 642.047L50.936 623.958Z"
                                        fill="#D9B75F" fill-opacity="0.23"/>
                                </g>
                            </g>
                        </g>
                        <g id="waves">
                            <g>
                                <mask id="mask9_442_4387" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="258"
                                      y="744" width="168" height="17">
                                    <path id="Rectangle 870"
                                          d="M258.571 744H425.942V761H267.623L260.521 756.333L258.571 744Z"
                                          fill="#D9D9D9"/>
                                </mask>
                                <g mask="url(#mask9_442_4387)">
                                    <g id="affiliate_sign_bg_wave5_1">
                                        <path
                                            d="M362.567 752.731C368.692 752.731 372.192 756.331 380.942 756.331V759.931H315.318C296.068 759.931 286.443 756.331 297.818 756.331C309.193 756.331 307.443 750.931 317.068 750.931C326.693 750.931 325.818 756.331 338.943 756.331C352.067 756.331 355.904 752.731 362.567 752.731Z"
                                            fill="white"/>
                                        <circle class="affiliate-svg-splash" cx="333.442" cy="750.431" r="1.5"
                                                fill="white"/>
                                        <circle class="affiliate-svg-splash" cx="372.942" cy="749.931" r="1"
                                                fill="white"/>
                                        <circle class="affiliate-svg-splash" cx="341.942" cy="751" r="1" fill="white"/>
                                    </g>
                                </g>
                            </g>
                            <g>
                                <mask id="mask10_442_4387" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="-37"
                                      y="797" width="305" height="17">
                                    <path id="Rectangle 871" d="M-36.4874 797L267.442 797V814H-27.8076L-36.4874 797Z"
                                          fill="#D9D9D9"/>
                                </mask>
                                <g mask="url(#mask10_442_4387)">
                                    <g id="affiliate_sign_bg_wave5_2">
                                        <path
                                            d="M171.083 805.731C178.952 805.731 185.442 810.5 195.442 811L189.071 812.931H126.117C120.014 812.931 95.7826 812.187 91.6696 811.815C97.0635 811.075 98.2621 811 106.38 810.231C117.696 809.16 118.248 803.931 127.866 803.931C137.484 803.931 136.609 809.331 149.725 809.331C162.84 809.331 164.424 805.731 171.083 805.731Z"
                                            fill="white"/>
                                        <circle class="affiliate-svg-splash" cx="142.442" cy="805.5" r="1.5"
                                                fill="white"/>
                                    </g>
                                </g>
                            </g>
                            <g>
                                <mask id="mask11_442_4387" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="1430"
                                      y="739" width="102" height="15">
                                    <path id="Rectangle 872"
                                          d="M1430.06 739.138L1531.7 739.138V753.71H1430.06L1430.06 739.138Z"
                                          fill="#D9D9D9"/>
                                </mask>
                                <g mask="url(#mask11_442_4387)">
                                    <g id="affiliate_sign_bg_wave4_4">
                                        <path
                                            d="M1486.89 748.405C1490.93 748.405 1493.23 750.405 1499 750.405V752.405H1455.75C1443.06 752.405 1436.72 750.405 1444.21 750.405C1451.71 750.405 1450.56 747.405 1456.9 747.405C1463.24 747.405 1462.23 749.905 1470.88 749.905C1479.53 749.905 1482.5 748.405 1486.89 748.405Z"
                                            fill="white"/>
                                        <circle class="affiliate-svg-splash" cx="1462" cy="743.474" r="2" fill="white"/>
                                        <circle class="affiliate-svg-splash" cx="1470" cy="744.405" r="1" fill="white"/>
                                    </g>
                                </g>
                            </g>
                            <g>
                                <mask id="mask12_442_4387" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="1284"
                                      y="758" width="171" height="19">
                                    <path id="Rectangle 873" d="M1284 758L1438.02 759.789L1455 768V777L1284 775.5V758Z"
                                          fill="#D9D9D9"/>
                                </mask>
                                <g mask="url(#mask12_442_4387)">
                                    <g id="affiliate_sign_bg_wave4_3">
                                        <path
                                            d="M1417.82 767.508C1427.65 767.816 1424.98 772.979 1438.55 773.652C1452.11 774.325 1415.17 776.726 1389.7 776.379C1380.84 776.259 1369.77 773.652 1375 773.652C1382.64 773.652 1384.04 772.367 1388.47 772.367C1392.9 772.367 1391.46 773.652 1397.5 773.652C1403.54 773.652 1409.42 767.244 1417.82 767.508Z"
                                            fill="white"/>
                                        <circle class="affiliate-svg-splash" cx="1428" cy="767.474" r="1" fill="white"/>
                                    </g>
                                    <g id="affiliate_sign_bg_wave4_2">
                                        <path
                                            d="M1356.19 771.026C1359.01 771.026 1360.97 773.459 1365 773.459L1365 775.081C1358.29 775.081 1341.39 775.405 1334.3 775.405C1325.44 775.405 1321.01 773.459 1326.25 773.459C1331.48 773.459 1331.5 769.405 1335.93 769.405C1340.37 769.405 1339.31 772.648 1345.36 772.648C1351.4 772.648 1353.12 771.026 1356.19 771.026Z"
                                            fill="white"/>
                                        <circle class="affiliate-svg-splash" cx="1344" cy="770.474" r="1" fill="white"/>
                                    </g>
                                </g>
                            </g>
                            <g>
                                <mask id="mask13_442_4387" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="1253"
                                      y="741" width="63" height="15">
                                    <path id="Rectangle 874" d="M1253.5 741H1315.93L1312.25 748L1304 756H1253.5V741Z"
                                          fill="#D9D9D9"/>
                                </mask>
                                <g mask="url(#mask13_442_4387)">
                                    <g id="affiliate_sign_bg_wave4_1">
                                        <path
                                            d="M1290.96 748.405C1296.75 748.324 1294.4 750.405 1303 751.405L1292.68 751.189C1289.58 751.189 1281.79 751.405 1278.52 751.405H1264.31C1266.72 751.405 1272.05 747.405 1277.2 747.405C1279.25 747.405 1280.83 749.567 1283.62 749.567C1286.41 749.567 1289.55 748.425 1290.96 748.405Z"
                                            fill="white"/>
                                        <circle class="affiliate-svg-splash" cx="1282" cy="746.405" r="1" fill="white"/>
                                        <circle class="affiliate-svg-splash" cx="1286.5" cy="746.974" r="0.5"
                                                fill="white"/>
                                    </g>
                                </g>
                            </g>
                        </g>
                        <g id="affiliate_sign_bg_comets">
                            <g>
                                <path d="M1260.62 92L1347 165.416" stroke="url(#paint21_linear_442_4387)"
                                      stroke-width="0.5" stroke-linecap="round"/>
                                <g filter="url(#filter7_f_442_4387)">
                                    <circle r="2.5" transform="matrix(-1 0 0 1 1346.5 164.916)" fill="#E89D67"/>
                                </g>
                                <circle r="1.5" transform="matrix(-1 0 0 1 1346.5 164.916)" fill="white"/>
                            </g>
                            <g>
                                <path d="M1073.33 201L1159.71 274.416" stroke="url(#paint22_linear_442_4387)"
                                      stroke-width="0.5" stroke-linecap="round"/>
                                <g filter="url(#filter8_f_442_4387)">
                                    <circle r="2.5" transform="matrix(-1 0 0 1 1159.21 273.916)" fill="#E89D67"/>
                                </g>
                                <circle r="1.5" transform="matrix(-1 0 0 1 1159.21 273.916)" fill="white"/>
                            </g>
                            <g>
                                <path d="M1394.62 136L1481 209.416" stroke="url(#paint23_linear_442_4387)"
                                      stroke-width="0.5" stroke-linecap="round"/>
                                <g filter="url(#filter9_f_442_4387)">
                                    <circle r="2.5" transform="matrix(-1 0 0 1 1480.5 208.916)" fill="#E89D67"/>
                                </g>
                                <circle r="1.5" transform="matrix(-1 0 0 1 1480.5 208.916)" fill="white"/>
                            </g>
                            <g>
                                <path d="M890.332 79L976.714 152.416" stroke="url(#paint24_linear_442_4387)"
                                      stroke-width="0.5" stroke-linecap="round"/>
                                <g filter="url(#filter10_f_442_4387)">
                                    <circle r="2.5" transform="matrix(-1 0 0 1 976.214 151.916)" fill="#E89D67"/>
                                </g>
                                <circle r="1.5" transform="matrix(-1 0 0 1 976.214 151.916)" fill="white"/>
                            </g>
                            <g>
                                <path d="M519.332 11L605.714 84.4161" stroke="url(#paint25_linear_442_4387)"
                                      stroke-width="0.5" stroke-linecap="round"/>
                                <g filter="url(#filter11_f_442_4387)">
                                    <circle r="2.5" transform="matrix(-1 0 0 1 605.214 83.9161)" fill="#E89D67"/>
                                </g>
                                <circle r="1.5" transform="matrix(-1 0 0 1 605.214 83.9161)" fill="white"/>
                            </g>
                            <g>
                                <path d="M101.332 254L187.714 327.416" stroke="url(#paint26_linear_442_4387)"
                                      stroke-width="0.5" stroke-linecap="round"/>
                                <g filter="url(#filter12_f_442_4387)">
                                    <circle r="2.5" transform="matrix(-1 0 0 1 187.214 326.916)" fill="#E89D67"/>
                                </g>
                                <circle r="1.5" transform="matrix(-1 0 0 1 187.214 326.916)" fill="white"/>
                            </g>
                            <g>
                                <path d="M253.332 -8.00003L339.714 65.4161" stroke="url(#paint27_linear_442_4387)"
                                      stroke-width="0.5" stroke-linecap="round"/>
                                <g filter="url(#filter13_f_442_4387)">
                                    <circle r="2.5" transform="matrix(-1 0 0 1 339.214 64.9161)" fill="#E89D67"/>
                                </g>
                                <circle r="1.5" transform="matrix(-1 0 0 1 339.214 64.9161)" fill="white"/>
                            </g>
                            <g>
                                <path d="M1361.35 40.8271L1404 77.4161" stroke="url(#paint28_linear_442_4387)"
                                      stroke-width="0.5" stroke-linecap="round"/>
                                <g filter="url(#filter14_f_442_4387)">
                                    <circle r="2.5" transform="matrix(-1 0 0 1 1403.5 76.9161)" fill="#E89D67"/>
                                </g>
                                <circle r="1.5" transform="matrix(-1 0 0 1 1403.5 76.9161)" fill="white"/>
                            </g>
                            <g>
                                <path d="M860.332 276L902.982 312.589" stroke="url(#paint29_linear_442_4387)"
                                      stroke-width="0.5" stroke-linecap="round"/>
                                <g filter="url(#filter15_f_442_4387)">
                                    <circle r="2.5" transform="matrix(-1 0 0 1 902.482 312.089)" fill="#E89D67"/>
                                </g>
                                <circle r="1.5" transform="matrix(-1 0 0 1 902.482 312.089)" fill="white"/>
                            </g>
                            <g>
                                <path d="M1566.35 183L1609 219.589" stroke="url(#paint30_linear_442_4387)"
                                      stroke-width="0.5" stroke-linecap="round"/>
                                <g filter="url(#filter16_f_442_4387)">
                                    <circle r="2.5" transform="matrix(-1 0 0 1 1608.5 219.089)" fill="#E89D67"/>
                                </g>
                                <circle r="1.5" transform="matrix(-1 0 0 1 1608.5 219.089)" fill="white"/>
                            </g>
                        </g>
                    </g>
                    <defs>
                        <filter id="filter0_f_442_4387" x="502.454" y="275.061" width="523.046" height="480.21"
                                filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                            <feGaussianBlur stdDeviation="47" result="effect1_foregroundBlur_442_4387"/>
                        </filter>
                        <filter id="filter1_f_442_4387" x="1236.51" y="-535.038" width="906.694" height="770.032"
                                filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                            <feGaussianBlur stdDeviation="47" result="effect1_foregroundBlur_442_4387"/>
                        </filter>
                        <filter id="filter2_f_442_4387" x="64.7948" y="-292.038" width="906.695" height="770.032"
                                filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                            <feGaussianBlur stdDeviation="47" result="effect1_foregroundBlur_442_4387"/>
                        </filter>
                        <filter id="filter3_f_442_4387" x="1347.03" y="233" width="467" height="467"
                                filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                            <feGaussianBlur stdDeviation="38" result="effect1_foregroundBlur_442_4387"/>
                        </filter>
                        <filter id="filter4_f_442_4387" x="1407.27" y="284.475" width="350.272" height="349.309"
                                filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                            <feGaussianBlur stdDeviation="8" result="effect1_foregroundBlur_442_4387"/>
                        </filter>
                        <filter id="filter5_f_442_4387" x="1457.02" y="261.776" width="169.981" height="169.981"
                                filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                            <feGaussianBlur stdDeviation="10" result="effect1_foregroundBlur_442_4387"/>
                        </filter>
                        <filter id="filter6_f_442_4387" x="1443.71" y="310.262" width="73.0092" height="73.0092"
                                filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                            <feGaussianBlur stdDeviation="6" result="effect1_foregroundBlur_442_4387"/>
                        </filter>
                        <filter id="filter7_f_442_4387" x="1331" y="149.416" width="31" height="31"
                                filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                            <feGaussianBlur stdDeviation="6.5" result="effect1_foregroundBlur_442_4387"/>
                        </filter>
                        <filter id="filter8_f_442_4387" x="1143.71" y="258.416" width="31" height="31"
                                filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                            <feGaussianBlur stdDeviation="6.5" result="effect1_foregroundBlur_442_4387"/>
                        </filter>
                        <filter id="filter9_f_442_4387" x="1465" y="193.416" width="31" height="31"
                                filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                            <feGaussianBlur stdDeviation="6.5" result="effect1_foregroundBlur_442_4387"/>
                        </filter>
                        <filter id="filter10_f_442_4387" x="960.714" y="136.416" width="31" height="31"
                                filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                            <feGaussianBlur stdDeviation="6.5" result="effect1_foregroundBlur_442_4387"/>
                        </filter>
                        <filter id="filter11_f_442_4387" x="589.714" y="68.4161" width="31" height="31"
                                filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                            <feGaussianBlur stdDeviation="6.5" result="effect1_foregroundBlur_442_4387"/>
                        </filter>
                        <filter id="filter12_f_442_4387" x="171.714" y="311.416" width="31" height="31"
                                filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                            <feGaussianBlur stdDeviation="6.5" result="effect1_foregroundBlur_442_4387"/>
                        </filter>
                        <filter id="filter13_f_442_4387" x="323.714" y="49.4161" width="31" height="31"
                                filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                            <feGaussianBlur stdDeviation="6.5" result="effect1_foregroundBlur_442_4387"/>
                        </filter>
                        <filter id="filter14_f_442_4387" x="1388" y="61.4161" width="31" height="31"
                                filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                            <feGaussianBlur stdDeviation="6.5" result="effect1_foregroundBlur_442_4387"/>
                        </filter>
                        <filter id="filter15_f_442_4387" x="886.982" y="296.589" width="31" height="31"
                                filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                            <feGaussianBlur stdDeviation="6.5" result="effect1_foregroundBlur_442_4387"/>
                        </filter>
                        <filter id="filter16_f_442_4387" x="1593" y="203.589" width="31" height="31"
                                filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                            <feGaussianBlur stdDeviation="6.5" result="effect1_foregroundBlur_442_4387"/>
                        </filter>
                        <linearGradient id="paint0_linear_442_4387" x1="880.803" y1="0" x2="880.803" y2="1761.34"
                                        gradientUnits="userSpaceOnUse">
                            <stop offset="0.270833" stop-color="#21284B"/>
                            <stop offset="1" stop-color="#5153E7"/>
                        </linearGradient>
                        <linearGradient id="paint1_linear_442_4387" x1="185.041" y1="554.607" x2="307.844" y2="951.92"
                                        gradientUnits="userSpaceOnUse">
                            <stop stop-color="#8886D9" stop-opacity="0.33"/>
                            <stop offset="0.778893" stop-color="white" stop-opacity="0"/>
                        </linearGradient>
                        <radialGradient id="paint2_radial_442_4387" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                                        gradientTransform="translate(1586.1 473.453) rotate(33.6465) scale(169.537)">
                            <stop offset="0.71875" stop-color="#2E1D5E"/>
                            <stop offset="1" stop-color="#413072"/>
                        </radialGradient>
                        <linearGradient id="paint3_linear_442_4387" x1="1589.06" y1="292.637" x2="1589.06" y2="658.213"
                                        gradientUnits="userSpaceOnUse">
                            <stop stop-color="#6567CE"/>
                            <stop offset="0.692708" stop-color="#271745"/>
                        </linearGradient>
                        <linearGradient id="paint4_linear_442_4387" x1="1723.96" y1="504.619" x2="1467.45" y2="402.901"
                                        gradientUnits="userSpaceOnUse">
                            <stop stop-color="white"/>
                            <stop offset="1" stop-color="white" stop-opacity="0"/>
                        </linearGradient>
                        <linearGradient id="paint5_linear_442_4387" x1="1727.78" y1="465.801" x2="1511.15" y2="364.453"
                                        gradientUnits="userSpaceOnUse">
                            <stop stop-color="white" stop-opacity="0"/>
                            <stop offset="1" stop-color="white"/>
                        </linearGradient>
                        <linearGradient id="paint6_linear_442_4387" x1="1732.57" y1="448.94" x2="1515.94" y2="347.592"
                                        gradientUnits="userSpaceOnUse">
                            <stop stop-color="white" stop-opacity="0"/>
                            <stop offset="1" stop-color="white" stop-opacity="0.35"/>
                        </linearGradient>
                        <linearGradient id="paint7_linear_442_4387" x1="1757.01" y1="409.692" x2="1534.07" y2="323.13"
                                        gradientUnits="userSpaceOnUse">
                            <stop stop-color="#F1C480"/>
                            <stop offset="1" stop-color="#F3D4A4" stop-opacity="0"/>
                        </linearGradient>
                        <linearGradient id="paint8_linear_442_4387" x1="1508.02" y1="324.653" x2="1506.06" y2="320.567"
                                        gradientUnits="userSpaceOnUse">
                            <stop stop-color="white"/>
                            <stop offset="1" stop-color="white" stop-opacity="0"/>
                        </linearGradient>
                        <linearGradient id="paint9_linear_442_4387" x1="1741.15" y1="342.705" x2="1589.76" y2="283.766"
                                        gradientUnits="userSpaceOnUse">
                            <stop stop-color="#F1C480"/>
                            <stop offset="1" stop-color="#F3D4A4" stop-opacity="0"/>
                        </linearGradient>
                        <radialGradient id="paint10_radial_442_4387" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                                        gradientTransform="translate(1586.1 473.453) rotate(33.6465) scale(169.537)">
                            <stop offset="0.71875" stop-color="#2E1D5E"/>
                            <stop offset="1" stop-color="#413072"/>
                        </radialGradient>
                        <linearGradient id="paint11_linear_442_4387" x1="1269.02" y1="541.743" x2="1269.02" y2="643.464"
                                        gradientUnits="userSpaceOnUse">
                            <stop stop-color="#7E549F"/>
                            <stop offset="1" stop-color="#090752"/>
                        </linearGradient>
                        <linearGradient id="paint12_linear_442_4387" x1="1675.55" y1="499.572" x2="1496.6" y2="571.713"
                                        gradientUnits="userSpaceOnUse">
                            <stop stop-color="#353F7D"/>
                            <stop offset="1" stop-color="#1F234E"/>
                        </linearGradient>
                        <linearGradient id="paint13_linear_442_4387" x1="1676.18" y1="499.572" x2="1451.26" y2="620.281"
                                        gradientUnits="userSpaceOnUse">
                            <stop stop-color="#765387"/>
                            <stop offset="1" stop-color="#1F234E"/>
                        </linearGradient>
                        <linearGradient id="paint14_linear_442_4387" x1="226.659" y1="562.781" x2="88.661" y2="592.046"
                                        gradientUnits="userSpaceOnUse">
                            <stop stop-color="#354E8F"/>
                            <stop offset="1" stop-color="#1F3161"/>
                        </linearGradient>
                        <linearGradient id="paint15_linear_442_4387" x1="226.549" y1="563.29" x2="89.3785" y2="572.746"
                                        gradientUnits="userSpaceOnUse">
                            <stop stop-color="#765387"/>
                            <stop offset="1" stop-color="#1F3161"/>
                        </linearGradient>
                        <linearGradient id="paint16_linear_442_4387" x1="868.5" y1="624.244" x2="868.5" y2="953.244"
                                        gradientUnits="userSpaceOnUse">
                            <stop stop-color="#1A2F65"/>
                            <stop offset="1" stop-color="#3D6491"/>
                        </linearGradient>
                        <linearGradient id="paint17_linear_442_4387" x1="868.499" y1="624.245" x2="868.499" y2="953.245"
                                        gradientUnits="userSpaceOnUse">
                            <stop stop-color="#1A2F65"/>
                            <stop offset="1" stop-color="#3D6491"/>
                        </linearGradient>
                        <radialGradient id="paint18_radial_442_4387" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                                        gradientTransform="translate(695.525 110.851) rotate(44.5018) scale(99.2914)">
                            <stop offset="0.0001" stop-color="#6C5FBD"/>
                            <stop offset="1" stop-color="#352F79"/>
                        </radialGradient>
                        <linearGradient id="paint19_linear_442_4387" x1="1393.09" y1="683" x2="1393.09" y2="773.446"
                                        gradientUnits="userSpaceOnUse">
                            <stop offset="0.239329" stop-color="#5B3879"/>
                            <stop offset="1" stop-color="#372762"/>
                        </linearGradient>
                        <linearGradient id="paint20_linear_442_4387" x1="236.775" y1="605.396" x2="236.775" y2="810.638"
                                        gradientUnits="userSpaceOnUse">
                            <stop stop-color="#5D397A"/>
                            <stop offset="1" stop-color="#221D55"/>
                        </linearGradient>
                        <linearGradient id="paint21_linear_442_4387" x1="1346.83" y1="166.271" x2="1264.54" y2="96.9879"
                                        gradientUnits="userSpaceOnUse">
                            <stop/>
                            <stop offset="0.0001" stop-color="white"/>
                            <stop offset="1" stop-color="white" stop-opacity="0"/>
                        </linearGradient>
                        <linearGradient id="paint22_linear_442_4387" x1="1159.54" y1="275.271" x2="1077.26" y2="205.988"
                                        gradientUnits="userSpaceOnUse">
                            <stop/>
                            <stop offset="0.0001" stop-color="white"/>
                            <stop offset="1" stop-color="white" stop-opacity="0"/>
                        </linearGradient>
                        <linearGradient id="paint23_linear_442_4387" x1="1480.83" y1="210.271" x2="1398.54" y2="140.988"
                                        gradientUnits="userSpaceOnUse">
                            <stop/>
                            <stop offset="0.0001" stop-color="white"/>
                            <stop offset="1" stop-color="white" stop-opacity="0"/>
                        </linearGradient>
                        <linearGradient id="paint24_linear_442_4387" x1="976.542" y1="153.271" x2="894.256" y2="83.9879"
                                        gradientUnits="userSpaceOnUse">
                            <stop/>
                            <stop offset="0.0001" stop-color="white"/>
                            <stop offset="1" stop-color="white" stop-opacity="0"/>
                        </linearGradient>
                        <linearGradient id="paint25_linear_442_4387" x1="605.542" y1="85.2706" x2="523.256" y2="15.9879"
                                        gradientUnits="userSpaceOnUse">
                            <stop/>
                            <stop offset="0.0001" stop-color="white"/>
                            <stop offset="1" stop-color="white" stop-opacity="0"/>
                        </linearGradient>
                        <linearGradient id="paint26_linear_442_4387" x1="187.542" y1="328.271" x2="105.256" y2="258.988"
                                        gradientUnits="userSpaceOnUse">
                            <stop/>
                            <stop offset="0.0001" stop-color="white"/>
                            <stop offset="1" stop-color="white" stop-opacity="0"/>
                        </linearGradient>
                        <linearGradient id="paint27_linear_442_4387" x1="339.542" y1="66.2706" x2="257.256"
                                        y2="-3.01213" gradientUnits="userSpaceOnUse">
                            <stop/>
                            <stop offset="0.0001" stop-color="white"/>
                            <stop offset="1" stop-color="white" stop-opacity="0"/>
                        </linearGradient>
                        <linearGradient id="paint28_linear_442_4387" x1="1403.67" y1="78.1345" x2="1362.88" y2="43.7913"
                                        gradientUnits="userSpaceOnUse">
                            <stop/>
                            <stop offset="0.0001" stop-color="white"/>
                            <stop offset="1" stop-color="white" stop-opacity="0"/>
                        </linearGradient>
                        <linearGradient id="paint29_linear_442_4387" x1="902.648" y1="313.307" x2="861.862" y2="278.964"
                                        gradientUnits="userSpaceOnUse">
                            <stop/>
                            <stop offset="0.0001" stop-color="white"/>
                            <stop offset="1" stop-color="white" stop-opacity="0"/>
                        </linearGradient>
                        <linearGradient id="paint30_linear_442_4387" x1="1608.67" y1="220.307" x2="1567.88" y2="185.964"
                                        gradientUnits="userSpaceOnUse">
                            <stop/>
                            <stop offset="0.0001" stop-color="white"/>
                            <stop offset="1" stop-color="white" stop-opacity="0"/>
                        </linearGradient>
                        <clipPath id="clip0_442_4387">
                            <rect width="1738" height="872" fill="white" transform="matrix(-1 0 0 1 1738 0)"/>
                        </clipPath>
                    </defs>
                </svg>
            </div>
            <div class="wrapper">
                <div class="affiliate-auth-outer">
                    <div class="affiliate-auth-form" id="join">
                        <div class="popup-auth">
                            <div class="auth-wrap">
                                <div class="auth-content">
                                    <nav class="auth-nav" id="auth_nav">
                                        <button type="button" id="nav_signin" class="auth-nav-btn" data-layout="signin">
                                            {{__('Sign in')}}
                                        </button>
                                        <button type="button" id="nav_signup" class="auth-nav-btn" data-layout="signup">
                                            {{__('Sign up')}}
                                        </button>
                                    </nav>
                                    <div class="auth-outer" id="auth_layouts">
                                        <form class="auth-layout" id="layout_forgot">
                                            <input name="email" required type="text" value="" data-label="{{__('Email')}}"
                                                   data-error-empty="{{__('This is a required field')}}"
                                                   data-error-invalid="{{__('Email entered is not a valid email')}}">
                                            <div class="auth-success" id="auth_reset_success">
                                                <p>{{__('Reset request successfully sent. You will receive a confirmation
                                                    e-mail if this account has been registered.')}}</p>
                                                <div class="auth-wrap-btn">
                                                    <button class="btn close popup-close-btn">{{__('Close')}}</button>
                                                </div>
                                            </div>
                                            <div class="auth-error" id="auth_reset_captcha_error">{{__('Invalid CAPTCHA. Try again')}}
                                            </div>
                                            <div class="auth-error" id="auth_reset_error">{{__('User with this email is not registered on the site.')}}
                                            </div>
                                            <div class="auth-wrap-btn">
                                                <button class="btn" id="auth_reset_btn" disabled
                                                        data-captcha-loading="{{__('Loading CAPTCHA...')}}">{{__('Reset password')}}
                                                </button>
                                            </div>
                                            <div class="auth-wrap-btn">
                                                <button class="btn-text auth-nav-btn" type="button"
                                                        data-layout="signin">{{__('Back to Sign in')}}
                                                </button>
                                            </div>
                                        </form>
                                        <form class="auth-layout" id="layout_signin">
                                            <input name="email" required type="text" value="" data-label="{{__('Email')}}"
                                                   data-error-empty="This is a required field"
                                                   data-error-invalid="Email entered is not a valid email">
                                            <input name="pswd" required type="password" value="" data-label="{{__('Password')}}"
                                                   data-error-empty="This is a required field">
                                            <div class="auth-forgot-wrap">
                                                <button class="btn-text hl auth-nav-btn" type="button" id="nav_forgot"
                                                        data-layout="forgot">{{__('Forgot password')}}
                                                </button>
                                            </div>
                                            <div class="auth-error" id="signin_captcha_error">{{__('Invalid CAPTCHA. Try again')}}
                                            </div>
                                            <div class="auth-error" id="auth_error">{{__('Invalid email or password')}}</div>
                                            <div class="auth-wrap-btn">
                                                <button class="btn" id="auth_signin" disabled
                                                        data-captcha-loading="{{__('Loading CAPTCHA...')}}">{{__('Sign in')}}
                                                </button>
                                            </div>
                                        </form>
                                        <form class="auth-layout" id="layout_signup">
                                            <input name="email" required type="text" value="" data-label="{{__('Email')}}"
                                                   data-error-empty="{{__('This is a required field')}}"
                                                   data-error-invalid="{{__('Email entered is not a valid email')}}">
                                            <input name="pswd" required type="password" value="" data-label="{{__('Password')}}"
                                                   data-error-empty="{{__('This is a required field')}}"
                                                   data-error-invalid="{{__('The password must contain at least one uppercase and one lowercase letter, one number, and contain at least 6 characters.')}}">
                                            <input name="repswd" required type="password" value=""
                                                   data-label="{{__('Confirm Password')}}"
                                                   data-error-empty="{{__('This is a required field')}}"
                                                   data-error-invalid="{{__('Passwords do not match.')}}">
                                            <div class="auth-error" id="signup_captcha_error"
                                                 data-loading="{{__('Invalid CAPTCHA. Try again')}}"></div>
                                            <div class="auth-error" id="auth_signup_error">{{__('An account with this email already exists.')}}
                                                <button class="btn-text auth-nav-btn" type="button" data-layout="forgot"
                                                        style="color: inherit;">{{__('Forgot password?')}}
                                                </button>
                                            </div>
                                            <div class="auth-wrap-btn">
                                                <button class="btn" id="auth_signup" disabled
                                                        data-captcha-loading="{{__('Loading CAPTCHA...')}}">{{__('Sign up')}}
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="affiliate-auth-desc">
                        <h2>{{__('Join our affiliate program')}}</h2>
                        <p>{{__('Get 40% of the profit from every exchange made by your customers')}}</p>
                    </div>
                </div>
            </div>
        </section>
    </main>
    @push('js')
        <script type="text/javascript">
            document.addEventListener("DOMContentLoaded", function () {
                let F = UI.func;
                APP.authInit('join', 'signin', false, '/user/affiliate');
            })
        </script>
    @endpush
</x-app-layout>
