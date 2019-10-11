import React from 'react';
import Tabs from "./helpers/Tabs/Tabs";
import dummyData from "./dummy-Data";
import AppPortalDataPane from "./DataPanes/AppPortalDataPane"
import SAMDataPane from "./DataPanes/SAMDataPane"
import SWAPDataPane from "./DataPanes/SWAPDataPane"
import AscentDataPane from "./DataPanes/AscentDataPane"
import AddSourceDataPane from "./DataPanes/AddSourceDataPane"
import "./helpers/Tabs/Tabs.css";
import "./softwareCatalog.css";

class TabbedDetailsContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data: null
    }
  }
  componentDidMount(){
    setTimeout(() =>{
      this.setState({data: dummyData})
    }, 500)
  }

  render() {
    const {data} = this.state;
    function checkData(data) {
      return (data ? true : "noData")
    }
    
    // SAM, SWAP, Ascent, AppPortal
    return (
      <>
      { this.state.data && 
      <>
      {console.log(checkData(data.SWAP))}
        <Tabs>
          <div label='SWAP' data={data.SWAP} className={`flexContainer`}>
              {data.SWAP ? <SWAPDataPane data={data.SWAP}/> : <AddSourceDataPane />}
          </div>
          <div label='SAM' data={data.SAM} className={`flexContainer`}>
              {data.SAM ? <SAMDataPane data={data.SAM}/> : <AddSourceDataPane />}
          </div>
          <div label='Ascent' data={data.Ascent} className={`flexContainer`}>
              {data.Ascent ? <AscentDataPane data={data.Ascent}/> : <AddSourceDataPane />}
          </div>
          <div label='App Portal' data={data.AppPortal} className={`flexContainer ${checkData(data.AppPortal)}`}>
              {data.AppPortal ? <AppPortalDataPane data={data.AppPortal}/> : <AddSourceDataPane />}
          </div>
        </Tabs>
        </>
      }
      </>
    );
  }
}

export default TabbedDetailsContainer;