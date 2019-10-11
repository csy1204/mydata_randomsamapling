<script>
import { Doughnut, mixins } from "vue-chartjs";
export default {
  extends: Doughnut,
  data(){
    return {
      datacollection:{
        labels: ["넷플릭스", "유튜브", "네이버tv"],
        datasets: [
          {
            label: "Data One",
            backgroundColor: ["#5380ff", "#84e6ff", "#f6f8fc"],
            data: [63, 35, 2]
          }
        ]
      },
      options:{
        borderWidth: "10px",
        hoverBackgroundColor: "red",
        hoverBorderWidth: "10px",
        chartOptions: {
            hoverBorderWidth: 20
        },
        chartData: {
            hoverBackgroundColor: "red",
            hoverBorderWidth: 10,
        }
      },


    };
  },
  mounted() {
    // this.chartData is created in the mixin.
    // If you want to pass options please create a local options object
    this.renderChart(this.datacollection, this.options);
  }
};
</script>