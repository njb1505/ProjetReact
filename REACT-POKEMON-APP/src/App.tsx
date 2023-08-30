import React, {FunctionComponent} from 'react';
import PokemonList from  './pages/pokemon-list';
import PokemonDetail from './pages/pokemon-detail';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import PageNotFound from './pages/page-not-found';
/** 
 Ici on importe React depuis le module react
 On importe aussi FunctionComponet depuis le module react.

 On importe: 
 -Router: qui permet de mettre en place un système de navigation.
 -Switch: permet d'afficher le contenue d'une seule route à la fois. 
 -Route: permet de décrire chque route de notre application.
*/
//------------------------------------
  
const App: FunctionComponent = () => {
//  const name: String = 'React';
// const [pokemons, setpokemons]= useState<Pokemon[]>([]);
    
// useEffect(() => {
//   setpokemons(mock_pokemon);
// }, []);

 return (
  // <PokemonList/>
  <Router>
    <div>

      {/*la barre de navigation commun à toutes les page */}
        <nav>
          <div className='nav-wrapper blue'>
          <Link to="/" className='brand-logo center'>Pokédex</Link>
          </div>
        </nav>

        {/*le système de gestion des routes de notre application */}
        <Switch>
          <Route exact path="/" component={PokemonList}/>

          <Route exact path="/pokemons" component={PokemonList}/>
            {/* les deux routes ci-haut sont semblables dans le sens où elles dirigents vers le pokemon-list */}
          <Route exact path="/pokemons/:id" component={PokemonDetail}/>

           
           <Route  component={PageNotFound}/>
           {/* Permet d'intercepter les routes qui ne sont pas prises en charge par notre application. Elle se place toujours en dernier.*/}

        </Switch>
    </div>
  </Router>
 )
}
export default App; 
/**
 1.On a typé la constante App à React.FC


 2. FunctionComponent: signifie un composant que l'on peut écrire sous forme d'une fonction.


 3.useState('React'): prend une valeur initiale du composant qui peut etre un nombre , un objet, un boolean, un tableau, un string et dans notre cas c'est un string.

 4. la fonction useState retourne une paire de deux elements const [name, setName].
 name: l'état actuel
 setName: une f(x) pour modifier la valeur de cet état.  

 5.Pour le typage on utilise les generics de typescript


 6.Le role finale de App.tsx est d'appeler le composant pokemon.list qui lui s'occupera d'afficher la liste des pokemons ainsi que gérer les routes.
 */
