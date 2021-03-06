import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RefreshIndicator from 'material-ui/RefreshIndicator';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

export default class FPHisPoDetailBody extends React.Component {
    constructor(props) {
    super(props);
  }

  componentWillMount() {
    //发送请求数据
    let UserID = this.props.user.loginname;
    let State = this.props.location.pathname.split('/')[2];
    let SoNum = this.props.location.pathname.split('/')[3];
    this.props.getHisPoDetailData(UserID,SoNum,State);
  }

  handleRowSelection(rows) {
    let State = this.props.location.pathname.split('/')[2];
    for (let i = 0; i < rows.length; i++) {
        let obj=this.props.status.poHisDetaildata[rows[i]]
        this.props.history.push(`/fphistorys/${State}/${obj.SONum}/${obj.ItemsNum}`);  
    }
  }

  handSubtitle(){
      let State = this.props.location.pathname.split('/')[2];
      if(State==='st5'){
          return 'On Way'
      }
      if(State==='st4'){
          return 'In Transit at Port'
      }
      if(State==='st3'){
          return 'Ready for Departure'
      }
      if(State==='st2'){
          return 'Packed but no Shipping'
      }
      if(State==='st1'){
          return 'Preparation'
      }
      if(State==='st6'){
          return 'All Order'
      }
  }

  render() {
  
    let poHisDetaildata=[];
    if(this.props.status.poHisDetaildata){
        poHisDetaildata= this.props.status.poHisDetaildata
    }
    //加载框开始
    const doing = this.props.status.doing;
		let loadStatus = 'loading';
		if(!doing){
			loadStatus = 'hide';
		}
    const style = {
      container: {
        position: 'relative',
        textAlign: 'center'
      },
      refresh: {
        display: 'inline-block',
        position: 'relative'
      },
		  displayNone: {
		  	display: 'none'
		  },
		  displayBlock: {
		  	display: 'block'
		  }
    };
    //加载框结束

    return (
    <MuiThemeProvider>
      <div> 
      <div style={doing ? style.displayNone:style.displayBlock} >
          <div style={{width:'100%',textAlign:'center'}}>
              {this.handSubtitle()}
          </div>
      <Table onRowSelection={(rows) => this.handleRowSelection(rows)}>
        <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
          <TableRow>
            <TableHeaderColumn>PO</TableHeaderColumn>
            <TableHeaderColumn>Items</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={false}>
          {poHisDetaildata.map((item,key) =>    
            <TableRow key={key} value={item}>              
              <TableRowColumn>{item.SONum}</TableRowColumn>
              <TableRowColumn>{item.ItemsNum}</TableRowColumn>          
            </TableRow>
            )
          }   
        </TableBody>
      </Table>
      </div>
      <div style={style.container}>
            <RefreshIndicator
              size={40}
              left={0}
              top={20}
              status={loadStatus}
              style={style.refresh}/>
      </div>
      </div>
    </MuiThemeProvider>
    );
  }
}