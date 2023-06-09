import { createRoot } from 'react-dom/client';

const element = (
  <>
    <p>Hello world</p>
  </>
);

const app = createRoot(document.getElementById('app'));
app.render(element);
