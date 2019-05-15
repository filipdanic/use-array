import React from 'react';

export default () =>
  <div id='docs'>
    <div className='buttons'>
      <h2>Method Docs</h2>
    </div>
    <div className='card'>
      <h3>empty</h3>
      <p><code>empty</code> will reset the state to an <mark>empty array.</mark></p>
      <pre>{`empty()`}</pre>
      <h3>replace / set</h3>
      <p><code>replace</code> and <code>set</code> are the same, they are called with one parameter: the <mark>new array</mark> for the state.</p>
      <pre>
        {`replace(newList) \n`}
        {`// or: \n`}
        {`set(newList)`}
      </pre>
      <h3>push</h3>
      <p><code>push</code> should be familiar – provide an <mark>item</mark> as the argument and it will be pushed to the state.</p>
      <pre>{`push(item)`}</pre>
      <h3>updateAt</h3>
      <p><code>updateAt</code> takes two parameters: <mark>the index</mark> and an <mark>update function</mark> which will be called with the item at the given index.</p>
      <pre>
        {`updateAt(index, (item) =>\n`}
        {`  ({ ...item, done: true }));`}
      </pre>
      <h3>setAt</h3>
      <p><code>setAt</code> takes two parameters: <mark>the index</mark> and an <mark>item</mark> which will be placed at the given index.</p>
      <pre>
        {`setAt(index, item)`}
      </pre>
      <h3>removeAt</h3>
      <p><code>removeAt</code> takes <mark>the index</mark> of the item that should be removed as a parameter.</p>
      <pre>
        {`removeAt(index)`}
      </pre>
      <h3>filter</h3>
      <p><code>filter</code> takes a <mark>filter function (predicate)</mark> as the parameter, just like <code>{`Array​.prototype​.filter()`}</code></p>
      <pre>
        {`filter((item) => item.done === false)`}
      </pre>
      <h3>map</h3>
      <p><code>map</code> takes a <mark>map function</mark> as the parameter, just like <code>{`Array​.prototype​.map()`}</code></p>
      <pre>
        {`map((item) => \n`}
        {`  ({ ...item, updatedAt: new Date().getTime() })\n`}
        {`)`}
      </pre>
      <h3>sort</h3>
      <p><code>sort</code> takes an <mark>optional sort function</mark> as the parameter, just like <code>{`Array​.prototype​.sort()`}</code></p>
      <pre>
        {`sort((a, b) => a.localeCompare(b))`}
      </pre>
      <h3>reverse</h3>
      <p><code>reverse</code> works just like <code>{`Array​.prototype​.reverse()`}</code></p>
      <pre>
        {`reverse()`}
      </pre>
    </div>
  </div>;
