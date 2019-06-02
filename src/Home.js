import React from 'react';
import { handleResponse } from './helpers';
import HomeShow from './HomeShow';

class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            
            categories: [],
            error: null

        };
        
    }
    componentDidMount() {
        this.fetchCategories();
    }
    
    fetchCategories() {
        this.setState();
        fetch(`http://temp.dash.zeta.in/food.php`)
        .then(handleResponse)
        .then((data) => {
            console.log(data);
            console.log(data.categories);
            const { categories } = data;
            this.setState({
                categories

            })
        })
        .catch((error) => {
            this.setState({
                error: error.errorMessage, 
            
            })
        });
    }


    render() {
        const {categories, error} = this.state;

        // render only loading component if loading state is set to true.

        // render only error message if error occurred while fetching data
        if(error) {
            return (
                <div className="error">{this.state.error}</div>
            )
        }
        return(
            <div>
                <HomeShow
                categories={categories}
                />
                
            </div>
        )
    }
}

export default Home;