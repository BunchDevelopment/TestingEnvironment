import React from 'react';
import TabbedDetailsContainer from './TabbedDetailsContainer'
import SearchBar from './SearchBar'
import ResultsSidePanel from './ResultsSidePanel'
import ResultsDetailsPanel from './ResultsDetailsPanel'
import './softwareCatalog.css'
class SoftwareCatalogContainer extends React.Component {
  render() {
    return (
      <div className="softwareCatalogContainer">
        <SearchBar />
        <ResultsSidePanel />
        <ResultsDetailsPanel />
        <div className="flexContainer flexContainBoxShadow">
          <TabbedDetailsContainer />
        </div>
      </div>
    );
  }
}

export default SoftwareCatalogContainer;