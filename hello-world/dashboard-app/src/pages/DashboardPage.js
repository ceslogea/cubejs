import React from 'react';
import { Col } from 'antd';
import ChartRenderer from '../components/ChartRenderer';
import Dashboard from '../components/Dashboard';
import DashboardItem from '../components/DashboardItem';
const DashboardItems = [
  {
    id: 0,
    name: 'Graph 1',
    vizState: {
      query: {
        measures: ['Orders.count'],
        timeDimensions: [
          {
            dimension: 'Orders.createdAt',
            granularity: 'month',
          },
        ],
        order: {
          'Orders.count': 'desc',
        },
        dimensions: ['Orders.status'],
      },
      chartType: 'area',
    },
  },
  {
    id: 1,
    name: 'Graph 2',
    vizState: {
      query: {
        measures: ['LineItems.quantity'],
        timeDimensions: [
          {
            dimension: 'Orders.createdAt',
            granularity: 'month',
          },
        ],
        order: {
          'LineItems.createdAt': 'asc',
        },
        dimensions: ['Orders.status'],
      },
      chartType: 'area',
    },
  },
  {
    id: 2,
    name: 'Graph 3',
    vizState: {
      query: {
        measures: ['Users.count'],
        timeDimensions: [],
        order: {
          'Users.count': 'desc',
        },
        dimensions: ['Users.city'],
      },
      chartType: 'pie',
    },
  },
];

const DashboardPage = () => {
  const dashboardItem = (item) => (
    <Col
      span={24}
      lg={12}
      key={item.id}
      style={{
        marginBottom: '24px',
      }}
    >
      <DashboardItem title={item.name}>
        <ChartRenderer vizState={item.vizState} />
      </DashboardItem>
    </Col>
  );

  const Empty = () => (
    <div
      style={{
        textAlign: 'center',
        padding: 12,
      }}
    >
      <h2>
        There are no charts on this dashboard. Use Playground Build to add one.
      </h2>
    </div>
  );

  return DashboardItems.length ? (
    <Dashboard dashboardItems={DashboardItems}>
      {DashboardItems.map(dashboardItem)}
    </Dashboard>
  ) : (
    <Empty />
  );
};

export default DashboardPage;
