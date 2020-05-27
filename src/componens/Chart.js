import React, { Component } from 'react';
import { Bar, Line, Pie, Polar } from 'react-chartjs-2';

class Chart extends Component{
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        labels: ['東京', '大阪', '神奈川', '京都', '滋賀', '福岡'],
        datasets: [
          {
            label: '東京',
            data: [
              13950000,
              8820000,
              9200000,
              1460000,
              1410000,
              5100000
            ],
            backgroundColor: [
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(255, 159, 64, 0.6)',
              'rgba(255, 99, 132, 0.6)'
            ]
          }
        ]
      }
    }
  }


  static defaultProps = {
    displayTitle: true ,
    displayLegend: true,
    legendPosition:'right'
  }

  render() {
    return (
      <div className="chart">
        <Bar
          data={this.state.chartData}
          options={{
            title: {
              display: this.props.displayTitle,
              text: '人口',
              fontSize:25
            },
            legend: {
              display: this.props.displayLegend,
              position:this.props.legendPosition
            }
          }}
        />
        <Line
          data={this.state.chartData}
          options={{
            title: {
              display: this.props.displayTitle,
              text: '人口',
              fontSize:25
            },
            legend: {
              display: this.props.displayLegend,
              position:this.props.legendPosition
            }
          }}
        />
        <Pie
          data={this.state.chartData}
          options={{
            title: {
              display: this.props.displayTitle,
              text: '人口',
              fontSize:25
            },
            legend: {
              display: this.props.displayLegend,
              position:this.props.legendPosition
            }
          }}
        />
        <Polar
          data={this.state.chartData}
          options={{
            title: {
              display: this.props.displayTitle,
              text: '人口',
              fontSize:25
            },
            legend: {
              display: this.props.displayLegend,
              position:this.props.legendPosition
            }
          }}
        />
      </div>
    )
  }
}

export default Chart;