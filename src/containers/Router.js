import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import Home from './Home';
import Query from './Query';
import Historys from './History';
import About from './About';
import Login from './Login';
import PoList from './PoList';
import PoDetail from './PoDetail';
import PoPackList from './PoPackList';
import PoPackTable from './PoPackTable';
import PoPackProgress from './PoPackProgress';
import Chart from './Chart';
import QueryByPo from './QueryByPo';
import QueryByPoItem from './QueryByPoItem';
import QueryByPn from './QueryByPn';
import QueryByDescription from './QueryByDescription';
import ListForMatnr from './ListForMatnr';
import ListForDescription from './ListForDescription';
import ListSearch from './ListSearch';
import DetailForHistorySoItem from './DetailForHistorySoItem';
import TrendChart from './TrendChart'

import FPHome from './FPHome';
import FPPoList from './FPPoList';
import FPPoDetail from './FPPoDetail';
import FPPoPackProgress from './FPPoPackProgress';
import FPQuery from './FPQuery';
import FPQueryByPo from './FPQueryByPo';
import FPQueryByPoItem from './FPQueryByPoItem';
import FPQueryByPn from './FPQueryByPn';
import FPListForMatnr from './FPListForMatnr';
import FPQueryByDescription from './FPQueryByDescription';
import FPListForDescription from './FPListForDescription';
import FPAbout from './FPAbout';
import FPHistorys from './FPHistorys';
import FPHisPoDetail from './FPHisPoDetail';
import FPHisPoPackProgress from './FPHisPoPackProgress';

const routes = [
    {
        path: '/',
        component: Login,
        exact: true,
        name: 'Login'
    }, {
        path: '/home',
        component: Home,
        exact: true,
        name: 'Home'
    },{
        path: '/home/:state',
        component: PoList,
        exact: true,
        name: 'PoList'
    },{
        path: '/home/:state/:soNum',
        component: PoDetail,
        exact: true,
        name: 'PoDetail'
    },{
        path: '/home/st6/:soNum/:itemsNum',
        component: PoPackList,
        exact: true,
        name: 'PoPackList'
    },{
        path: '/home/st5/:soNum/:itemsNum',
        component: PoPackProgress,
        exact: true,
        name: 'PoPackProgress'
    },{
        path: '/home/st1/:soNum/:itemsNum',
        component: PoPackTable,
        exact: true,
        name: 'PoPackTable'
    },{
        path: '/home/st2/:soNum/:itemsNum',
        component: PoPackTable,
        exact: true,
        name: 'PoPackTable'
    }, {
        path: '/home/st3/:soNum/:itemsNum',
        component: PoPackTable,
        exact: true,
        name: 'PoPackTable'
    },{
        path: '/home/st4/:soNum/:itemsNum',
        component: PoPackTable,
        exact: true,
        name: 'PoPackTable'
    },{
        path: '/home/st1/:soNum/:itemsNum/:packListNo',
        component: PoPackProgress,
        exact: true,
        name: 'PoPackProgress'
    },{
        path: '/home/st2/:soNum/:itemsNum/:packListNo',
        component: PoPackProgress,
        exact: true,
        name: 'PoPackProgress'
    },{
        path: '/home/st3/:soNum/:itemsNum/:packListNo',
        component: PoPackProgress,
        exact: true,
        name: 'PoPackProgress'
    },{
        path: '/home/st4/:soNum/:itemsNum/:packListNo',
        component: PoPackProgress,
        exact: true,
        name: 'PoPackProgress'
    },{
        path: '/home/st6/:soNum/:itemsNum/Packaging',
        component: PoPackProgress,
        exact: true,
        name: 'PoPackProgress'
    },{
        path: '/chart',
        component: Chart,
        exact: true,
        name: 'Chart'
    },{
        path: '/query',
        component: Query,
        exact: true,
        name: 'Query'
    },{
        path: '/query/po',
        component: QueryByPo,
        exact: true,
        name: 'Query by PO number'
    },{
        path: '/query/po&item',
        component: QueryByPoItem,
        exact: true,
        name: 'Query by PO+Item number'
    },{
        path: '/query/pn',
        component: QueryByPn,
        exact: true,
        name: 'Query by PN#'
    },{
        path: '/query/description',
        component: QueryByDescription,
        exact: true,
        name: 'Query by Description'
    },{
        path: '/query/matnr/:pn',
        component: ListForMatnr,
        exact: true,
        name: 'PO Content'
    },{
        path: '/query/desc/:desc',
        component: ListForDescription,
        exact: true,
        name: 'Progress'
    },{
        path: '/historys',
        component: Historys,
        exact: true,
        name: 'Historys'
    },{
        path: '/historys/listSearch/:type/:beginTime/:overTime/:LiaoNum',
        component: ListSearch,
        exact: true,
        name: 'Historical Details List'
    },{
        path: '/historys/listSearch/:so/:item',
        component: DetailForHistorySoItem,
        exact: true,
        name: 'Historical Details'
    },{
        path: '/historys/trendChart/:type/:beginTime/:overTime/:LiaoNum',
        component: TrendChart,
        exact: true,
        name: 'Trend Chart of Shipments'
    },{
        path: '/about',
        component: About,
        name: 'About'
    }, {
        path: '/login',
        component: Login,
        name: 'Login'
    },{
        path: '/fphome',
        component: FPHome,
        exact: true,
        name: 'Home'
    },{
        path: '/fphome/:state',
        component: FPPoList,
        exact: true,
        name: 'PoList'
    },{
        path: '/fphome/:state/:soNum',
        component: FPPoDetail,
        exact: true,
        name: 'PoDetail'
    },{
        path: '/fphome/:state/:soNum/:itemsNum',
        component: FPPoPackProgress,
        exact: true,
        name: 'PoPackProgress'
    },{
        path: '/fpquery',
        component: FPQuery,
        exact: true,
        name: 'Query'
    },{
        path: '/fpquery/po',
        component: FPQueryByPo,
        exact: true,
        name: 'Query by PO number'
    },{
        path: '/fpquery/po&item',
        component: FPQueryByPoItem,
        exact: true,
        name: 'Query by PO+Item number'
    },{
        path: '/fpquery/pn',
        component: FPQueryByPn,
        exact: true,
        name: 'Query by PN#'
    },{
        path: '/fpquery/matnr/:pn',
        component: FPListForMatnr,
        exact: true,
        name: 'PO Content'
    },{
        path: '/fpquery/description',
        component: FPQueryByDescription,
        exact: true,
        name: 'Query by Description'
    },{
        path: '/fpquery/desc/:desc',
        component: FPListForDescription,
        exact: true,
        name: 'Progress'
    },{
        path: '/fpabout',
        component: FPAbout,
        name: 'About'
    },{
        path: '/fphistorys',
        component: FPHistorys,
        exact: true,
        name: 'History'
    },{
        path: '/fphistorys/:state/:soNum',
        component: FPHisPoDetail,
        exact: true,
        name: 'PoDetail'
    },{
        path: '/fphistorys/:state/:soNum/:itemsNum',
        component: FPHisPoPackProgress,
        exact: true,
        name: 'PoPackProgress'
    }
]

export default() => (
    <BrowserRouter>
        <div>
            {routes.map((route, i) => (
                <Route
                    key={i}
                    exact={route.exact}
                    path={route.path}
                    render={props => (<route.component {...props} routeName={route.name}/>)}/>
            ))}
        </div>
    </BrowserRouter>
)
