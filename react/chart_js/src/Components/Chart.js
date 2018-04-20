import React, { Component } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';


class Chart extends Component{
   constructor(props){
      super(props);

      this.state = {
         chartData: {
            labels: ['Edinburgh', 'Glasgow', 'France', 'Africa'],
            datasets: [{
               label: 'Population',
               data: [
                  1324, 675, 45, 2970
               ]
            }]
         }
      }
   }

   render(){
      return (
         <div className="chart">
            <Bar
               className="bar"
               data = {this.state.chartData}
               options = {{
                  maintainAspectRation: false
               }}
            />
         </div>
      )
   }
}


export default Chart;
