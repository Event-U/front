<template>
    <div class="main-wrapper skin-dark">

        <div class="content-body">
            <div class="row">

                <!-- Line Start -->
                <div class="col-lg-4 col-md-6 col-12 mb-30">
                    <div class="box">
                        <div class="box-head">
                            <h4 class="title">Eventos</h4>
                        </div>
                        <div class="box-body">
                            <div class="example-chartjs">
                                <canvas id="example-chartjs-line"></canvas>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Line End -->

                <!-- Line Area Start -->
                <div class="col-lg-4 col-md-6 col-12 mb-30">
                    <div class="box">
                        <div class="box-head">
                            <h4 class="title">Eventos</h4>
                        </div>
                        <div class="box-body">
                            <div class="example-chartjs">
                                <canvas id="example-chartjs-lineArea"></canvas>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Line Area End -->

                <!-- Bar Vertical Start -->
                <div class="col-lg-4 col-md-6 col-12 mb-30">
                    <div class="box">
                        <div class="box-head">
                            <h4 class="title">Eventos</h4>
                        </div>
                        <div class="box-body">
                            <div class="example-chartjs">
                                <canvas id="example-chartjs-barV"></canvas>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Bar Vertical End -->

                <!-- Bar Horizontal Start -->
                <div class="col-lg-4 col-md-6 col-12 mb-30">
                    <div class="box">
                        <div class="box-head">
                            <h4 class="title">Eventos</h4>
                        </div>
                        <div class="box-body">
                            <div class="example-chartjs">
                                <canvas id="example-chartjs-barH"></canvas>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Bar Horizontal End -->

                <!-- Scatter Start -->
                <div class="col-lg-4 col-md-6 col-12 mb-30">
                    <div class="box">
                        <div class="box-head">
                            <h4 class="title">Eventos</h4>
                        </div>
                        <div class="box-body">
                            <div class="example-chartjs">
                                <canvas id="example-chartjs-scatter"></canvas>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Scatter End -->

                <!-- Doughnut Start -->
                <div class="col-lg-4 col-md-6 col-12 mb-30">
                    <div class="box">
                        <div class="box-head">
                            <h4 class="title">Eventos</h4>
                        </div>
                        <div class="box-body">
                            <div class="example-chartjs">
                                <canvas id="example-chartjs-doughnut"></canvas>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Doughnut End -->

                <!-- Pie Start -->
                <div class="col-lg-4 col-md-6 col-12 mb-30">
                    <div class="box">
                        <div class="box-head">
                            <h4 class="title">Pie</h4>
                        </div>
                        <div class="box-body">
                            <div class="example-chartjs">
                                <canvas id="example-chartjs-pie"></canvas>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Pie End -->

                <!-- Polar Start -->
                <div class="col-lg-4 col-md-6 col-12 mb-30">
                    <div class="box">
                        <div class="box-head">
                            <h4 class="title">Polar</h4>
                        </div>
                        <div class="box-body">
                            <div class="example-chartjs">
                                <canvas id="example-chartjs-polar"></canvas>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Polar End -->

                <!-- Radar Start -->
                <div class="col-lg-4 col-md-6 col-12 mb-30">
                    <div class="box">
                        <div class="box-head">
                            <h4 class="title">Radar</h4>
                        </div>
                        <div class="box-body">
                            <div class="example-chartjs">
                                <canvas id="example-chartjs-radar"></canvas>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Radar End -->
            </div>

        </div>
        <!-- Content Body End -->
    </div>
</template>

<script>
export default {
  name: 'AllCharts'
}

</script>

<style scoped>

.main-wrapper {
    background-color: #1C2038;
}

.box {
    word-wrap: break-word;
    background-color: #252B48;
    border-radius: 10px;
    margin-top: 10px;
    box-shadow: 0px 0px 20px #171B3A;
}

.box .box-head {
    padding: 20px 25px;
    border-bottom: 1px solid #f1f1f1;
}

.box .box-head .title {
    font-size: 1.6em;
    margin: 0;
    color: #ffff00;
}

.box .box-head p {
    margin-top: 5px;
}

.box .box-body {
    padding: 25px;
}

.box .box-foot {
    padding: 0 25px 25px;
}

/*Chart Legends*/

.chart-legends-1 {
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    margin-bottom: 15px;
}

.chart-legends-1 .chart-legend-1 {
    margin-bottom: 20px;
}

.chart-legends-1 .chart-legend-1 .title {
    line-height: 1;
    margin-bottom: 10px;
}

.chart-legends-1 .chart-legend-1 .value {
    line-height: 1;
    font-weight: 600;
    margin: 0;
}

/*Revenue Statistics Charts*/

.chartjs-revenue-statistics-chart,
.chartjs-revenue-statistics-chart-2 {
    position: relative;
    width: 100%;
    height: 400px;
}

@media only screen and (min-width: 1200px) and (max-width: 1499px),
only screen and (min-width: 992px) and (max-width: 1199px),
only screen and (min-width: 768px) and (max-width: 991px),
only screen and (max-width: 767px) {
    .chartjs-revenue-statistics-chart,
    .chartjs-revenue-statistics-chart-2 {
        height: 300px;
    }
}

/*Market Trends Chart*/

.chartjs-market-trends-chart {
    position: relative;
    width: 100%;
    height: 450px;
}

@media only screen and (min-width: 1200px) and (max-width: 1499px),
only screen and (min-width: 992px) and (max-width: 1199px),
only screen and (min-width: 768px) and (max-width: 991px),
only screen and (max-width: 767px) {
    .chartjs-market-trends-chart {
        height: 350px;
    }
}

/*Market Trends Chart 2 , Analytics Chart & Graph Chart */

.chartjs-market-trends-chart-2,
.chartjs-analytics-chart,
.chartjs-graph-chart {
    position: relative;
    width: 100%;
    height: 400px;
}

@media only screen and (min-width: 1200px) and (max-width: 1499px),
only screen and (min-width: 992px) and (max-width: 1199px),
only screen and (min-width: 768px) and (max-width: 991px),
only screen and (max-width: 767px) {
    .chartjs-market-trends-chart-2,
    .chartjs-analytics-chart,
    .chartjs-graph-chart {
        height: 350px;
    }
}

/*Echart Example*/

.example-echarts {
    width: 100%;
    height: 300px;
}

/*ChartJs Example*/

.example-chartjs {
    width: 100%;
    height: 250px;
}

/*Morris Example*/

.example-morris {
    width: 100%;
    height: 250px;
}

.example-morris>svg {
    width: 100%;
}

/*Sparkline Chart*/

.sparkline-chart {
    display: block;
    width: 100%;
    text-align: center;
}

.sparkline-chart canvas {
    height: auto !important;
    max-width: 100% !important;
}

.jqstooltip {
    height: auto !important;
    width: auto !important;
}

/*Google Chart*/

.example-gchart {
    width: 100%;
    height: 300px;
}
</style>
