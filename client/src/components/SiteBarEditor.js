import React from 'react';

export default function  SiteBarEditor(){

    return ( <>
    <div id="column-left" className="col-sm-3 hidden-xs column-left">
    <div className="column-block">
        <div className="columnblock-title">Категории</div>
        <div className="category_block">
            <ul className="box-category treeview-list treeview">
            
                <li><a href="">Красота</a> </li>
                <li><a href="">Здоровье</a> </li>
                <li><a href="">Развлечение</a> </li>
                <li><a href="">Культура</a> </li>
            </ul>
        </div>
    </div>


   
</div>
    </>);
}