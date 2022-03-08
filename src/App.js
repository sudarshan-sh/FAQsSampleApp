import { useState } from 'react';
import Questions from './Questions';
import data from './data';

function App() {
  const [questions, setQuestions] = useState(data)

  return (
    <main>
      <div className='container'>
        <div className="title">
          <h2 className='title-questions'>questions and answers about login</h2>
        </div>
        <section className='questions'>
          {
            questions.map((question) => {
              return <Questions key={question.id} {...question} />
            })
          }
        </section>
      </div>
    </main>
  );
}

export default App;
