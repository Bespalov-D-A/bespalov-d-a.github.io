import { rest } from 'msw';
import { geoFeatures } from './../../data/text/mockGeoFeatures';
import {
  mockBarData,
  mockDataContacts,
  mockDataInvoices,
  mockDataTeam,
  mockGeographyData,
  mockLineData,
  mockPieData,
  mockTransactions,
} from '../../data/text/mockData';

//для всех гет запросов
export const handlers = [
  rest.get('*', async (req, res, ctx) => {
    return res(
      ctx.delay(2000), // задержка на 2 секунды
      ctx.status(200)
    );
  }),
  //   rest.post('/login', (req, res, ctx) => {
  //     const { username } = req.body;

  //     return res(
  //       ctx.json({
  //         id: 'f79e82e8-c34a-4dc7-a49e-9fadc0979fda',
  //         username,
  //         firstName: 'John',
  //         lastName: 'Maverick',
  //       })
  //     );
  //   }),

  rest.get('/photo', async (req, res, ctx) => {
    return res(
      ctx.json({
        photo: true,
      })
    );
  }),

  rest.get('/team', (req, res, ctx) => {
    return res(
      ctx.json({
        team: mockDataTeam,
      })
    );
  }),

  rest.get('/contacts', (req, res, ctx) => {
    return res(
      ctx.json({
        contacts: mockDataContacts,
      })
    );
  }),

  rest.get('/invoices', (req, res, ctx) => {
    return res(
      ctx.json({
        invoices: mockDataInvoices,
      })
    );
  }),

  rest.get('/transactions', (req, res, ctx) => {
    return res(
      ctx.json({
        transactions: mockTransactions,
      })
    );
  }),

  rest.get('/bar-data', (req, res, ctx) => {
    return res(
      ctx.json({
        barData: mockBarData,
      })
    );
  }),

  rest.get('/pie-data', (req, res, ctx) => {
    return res(
      ctx.json({
        pieData: mockPieData,
      })
    );
  }),

  rest.get('/geo-data', (req, res, ctx) => {
    return res(
      ctx.json({
        geoData: mockGeographyData,
      })
    );
  }),

  rest.get('/line-data', (req, res, ctx) => {
    return res(
      ctx.json({
        lineData: mockLineData,
      })
    );
  }),

  rest.get('/geo-features', (req, res, ctx) => {
    return res(
      ctx.json({
        geoFeatures,
      })
    );
  }),
];
