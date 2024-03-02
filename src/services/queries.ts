import axios from "axios";

const BASE_URL = "https://api.spotify.com/v1.me";
const getUserDetailsFunctions = async () => {
  const response = await axios.get(BASE_URL);
};
const data = {
  response: {
    authentication: null,
    error: null,
    errorCode: null,
    params: {
      code: "AQBciq6EqWR0rVPk9xKKaKpxPkVDUT3IlyzXEVZ4KouPvthX4sRvdkNyJbqXmcu71XTYY3EEvcoln6cPKDto_oXraLBr45GCPcLuFB7OEBt2ZoLSY-J8vtjv1NgbGeM2YF281BJXgzin27espn5hVi-cw6_02tVt8xMEzmbhiQPdcUqCRqztOGSdqXNRJtDPCREb_BGdDZvyz3AIK_oo-x_kATThyNt59EkGUJAXzGw6adNRZLjV9bXEe4k0DlaSlV962XdBBhPnGc9N_Wt9AyrlGcs78-bZR9YBvCwEj9ugTDiK5LB1fIHJ1Qid8Bk1vBCW7n6_e_9nBGxRecv4t2PxJmiHOPZRU2-jSVb9swbTAD1TIWwlrNTXR9CAGXt37Q",
      state: "yEO0oTIMpI",
    },
    type: "success",
    url: "exp://192.168.31.149:8081/--/(main)?code=AQBciq6EqWR0rVPk9xKKaKpxPkVDUT3IlyzXEVZ4KouPvthX4sRvdkNyJbqXmcu71XTYY3EEvcoln6cPKDto_oXraLBr45GCPcLuFB7OEBt2ZoLSY-J8vtjv1NgbGeM2YF281BJXgzin27espn5hVi-cw6_02tVt8xMEzmbhiQPdcUqCRqztOGSdqXNRJtDPCREb_BGdDZvyz3AIK_oo-x_kATThyNt59EkGUJAXzGw6adNRZLjV9bXEe4k0DlaSlV962XdBBhPnGc9N_Wt9AyrlGcs78-bZR9YBvCwEj9ugTDiK5LB1fIHJ1Qid8Bk1vBCW7n6_e_9nBGxRecv4t2PxJmiHOPZRU2-jSVb9swbTAD1TIWwlrNTXR9CAGXt37Q&state=yEO0oTIMpI",
  },
};
