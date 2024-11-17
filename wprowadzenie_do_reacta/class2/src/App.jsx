import Header from './components/Header/Header';

import { CORE_CONCEPTS } from './data';


function App() {
  return (
    <div>
      <Header/>
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept
              {...CORE_CONCEPTS[0]}
            />
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
