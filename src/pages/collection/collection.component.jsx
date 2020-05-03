import React from 'react';
import { connect } from 'react-redux';

import CollectionItem from '../collection/collection.component';

import { selectCollection } from '../../redux/shop/shop.selectors';


import './collection.styles.scss';


const CollectionPage = ({ collection }) => {

    console.log('STILL STILL NOT UNDEFINED!!!!..............' + collection.id);
    console.log(collection)
    
    const { title, items } = collection; 

    return (
        <div className="collection-page">
            <h2 className='title' >{ title }</h2>
            <div className="items">
                {
                    items.map( (item) => (
                        <CollectionItem key={item.id} item={item} />
                    ) )
                }
            </div>
        </div>
    )
}

let count = 1;

const mapStateToProps = (state, ownProps) => {

    console.log(`round ${count}`);
    console.log(`THIS IS NOT UNDEFINED on round ${count} __` + ownProps.match.params.collectionId);
    count ++;

  return  {
    collection: selectCollection(ownProps.match.params.collectionId)(state)
}};


export default connect(mapStateToProps)(CollectionPage);