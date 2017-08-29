import React, {Component} from 'react';
import {connect} from 'dva';
import styles from './adminHome.scss';
import {BarChart, Bar, LineChart, Line} from 'recharts';
import {Card, Col} from 'antd';

class AdminHome extends Component {
    render() {
        const {user} = this.props;
        const data = [
            {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
            {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
            {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
            {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
            {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
            {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
            {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
        ];
        return (
            <div>
                <Col span="11">
                    <Card title="条形图表">
                        <BarChart width={500} height={120} data={data}>
                            <Bar dataKey='uv' fill='#8884d8'/>
                            <Bar dataKey='pv' fill='#ccc'/>
                            <Bar dataKey='amt' fill='#ff0'/>
                        </BarChart>
                    </Card>
                </Col>
                <Col span="11" offset={1}>
                    <Card title="线性图表">
                        <LineChart width={500} height={120} data={data}>
                            <Line dataKey='uv' fill='red'/>
                            <Line dataKey='pv' fill='green'/>
                            <Line dataKey='amt' fill='#8884d8'/>
                        </LineChart>
                    </Card>
                </Col>
            </div>
        );
    }
}

export default connect(state => state)(AdminHome);