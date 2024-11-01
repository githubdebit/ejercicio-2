// Ejercicio 2


import './App.css';

function App() {

const coches= [
                {Matricula: '1425BTY', Marca: 'Peugeot', Modelo:'3008', Tipo:'híbrido'},
                {Matricula: '1762MNY', Marca: 'Mercedes', Modelo:'EQS', Tipo:'Diesel'},
                {Matricula: '9882TPK', Marca: 'Renault', Modelo:'4 E-Tech', Tipo:'Eléctrico'}, 
                {Matricula: '6634TRV', Marca: 'Volswagen', Modelo:'Golf', Tipo:'Gasolina'}, 
                {Matricula: '2285RPL', Marca: 'Toyota', Modelo:'RAV4', Tipo:'hibrido'}, 
                {Matricula: '1782PRT', Marca: 'Peugeot', Modelo:'5008', Tipo:'diesel'}
              ];

  return (
    <div className="App">
      <body className="App-header">
      <h1>Listado de vehículos</h1>
        <ul>
           {coches.map(item => ( 
            <li><div class="StyledTextComponent">{item.Matricula} - {item.Modelo} {item.Marca} ({item.Tipo})</div></li>
           ))}
        </ul>
      
      </body>
    </div>
  );
}

export default App;
