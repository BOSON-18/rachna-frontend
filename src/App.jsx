import './App.css';
import Form from './components/Form';
import Header from './components/Header';
import Card from './components/Cards';
import Innovision from './components/Content';
import Footer from './components/Footer';
import { BsRocket } from 'react-icons/bs';
import StageDesc from './components/StageDesc';


function App() {

	return (
			
			<div id='kuchh'>
				<Header />
			  <Innovision />
				<div className='stages'>
					<div className="cards-div">
						<Card
								stage="Stage - I"
								title="Rachna"
								description="The Beginning of Your Entrepreneurial Journey!"
						/> 
						<Card
							stage="Stage - II"
							title="Coming Soon!!"
							description="description for Stage 2."
						/> 
						<Card
							stage="Stage - III"
							title="Coming Soon!!"
							description="description for Stage 3."
						/> 
						<Card
							stage="Stage - IV"
							title="Coming Soon!!"
							description="description for Stage 4."
						/> 
					</div>
			</div>

				<StageDesc />
			
				<Footer />
			</div>
    )
}

export default App;
