import React, {useState} from 'react';
import useCollapse from 'react-collapsed';
 
function Demo() {
  const [isOpen, setOpen] = useState(false);
  const {getCollapseProps, getToggleProps} = useCollapse({isOpen});
 
  return (
    <div>
      <button
        {...getToggleProps({
          onClick: () => setOpen(oldOpen => !oldOpen),
        })}
      >
        {isOpen ? 'Collapse' : 'Expand'}
      </button>
      <section {...getCollapseProps()}>Collapsed content 🙈</section>
    </div>
  );
}

export default Demo