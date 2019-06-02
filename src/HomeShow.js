import React from 'react';
import { withRouter } from 'react-router-dom';


const HomeShow = (props) => {
    const { categories, history} = props;
    return(
        <div className="HomeShow-Container">
                    {
                        categories.map((category) => (
                        //  key={category.name}
                        //  onClick={() => history.push(`/category/${category.id}`)}

                        // <div class="card bg-dark text-white">
                        //     <img src="${currency.image}" class="card-img" alt="img">

                        //     <div class="card-img-overlay">
                        //         <h5 class="card-title">Card title</h5>
                        //     </div>
                        // </div>
                        
                        {category}
                        )) 
                    }  
        </div>
    )
}

export default withRouter(HomeShow);