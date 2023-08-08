import Accordions from "./Accordions";
import { accordionData } from "./utils/content";

const App = () => {
  return (
    <div>
      <div className="accordion">
        {accordionData.map(({ title, content }) => {
          return (
            <Accordions
              title={title}
              content={content}
              key={Math.random() * 100}
            />
          );
        })}
      </div>
    </div>
  );
};
export default App;
