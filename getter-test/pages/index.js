import Head from 'next/head';
import moment from "moment";
import Chart from 'chart.js';

import { orders, revenueThisWeek } from "../../data/data.js";

const styles = {
  cardSet: {
    display: 'flex',
    margin: '100px'
  },
  card: {
    border: 'solid 2px black',
    width: '300px',
    height: '300px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    margin: '100px',
    background: 'lightsalmon'
  },
  orders: {
    fontSize: '60px'
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    margin: '15px',
    color: 'white'
  },
  date: {
    position: 'absolute',
    top: 0,
    right: 0,
    margin: '15px',
    color: 'white'
  }
}

function NSWOrders() {
  let NSW = orders[0].nsw
  return NSW;
}

function QLDOrders() {
  let QLD = orders[0].qld
  return QLD;
}

function VICOrders() {
  let VIC = orders[0].vic
  return VIC;
}

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Metric Dash 2.0</title>
      </Head>

      <main style={{ 
        margin: 0, 
        padding: 0,
        background: 'darkblue',
        width: '100%' }}> 
        <div id="header">
          <h1 id="title" style={styles.header}>
            GETTER SALES
          </h1>
          <h1 id="date" style={styles.date}>
            <moment interval={10000} format="DD MMM YY HH:mm">
              {moment().format("LLLL")}
            </moment>
          </h1>
        </div>
        <div id="data-cards" style={styles.cardSet}>
          <div id="card1" style={styles.card}>
            <h2>Todays orders</h2>
              <div style={styles.orders}>{NSWOrders()}</div>
            <h2>NSW</h2>
          </div>
          <div id="card2" style={styles.card}>
            <h2>Todays orders</h2>
            <div style={styles.orders}>{QLDOrders()}</div>
            <h2>QLD</h2>
          </div>
          <div id="card3" style={styles.card}>
            <h2>Todays orders</h2>
            <div style={styles.orders}>{VICOrders()}</div>
            <h2>VIC</h2>
          </div>
          <div id="charting">
            <div id='chart'>{() => {
              ;
              const ctx = document.getElementById('chart');
              const chart = new Chart(ctx, {
                type: line,
                data: { revenueThisWeek },
                options: {
                  scales: {
                    y: {
                      beginAtZero: true,
                    }
                  }
                }
              });
              
              //TODO: FIX ME!

              return chart;
        }}
        </div>
          <p style={{
            color: 'white', 
            position: 'absolute', 
            bottom: '300px',
            left: '45%' 
          }}>Check this space for upcoming data!</p>
          </div>
        </div>
      </main>

      <footer style={{ color: 'white', background: 'darkblue' }}>
        <a href="https://github.com/jrostirolla">
          Created by James Rostirolla!
        </a>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
