import { createRoot } from 'react-dom/client';
import './index.css'

const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(
    <div>
        <strong>
            Hello World
        </strong>
    </div>
)