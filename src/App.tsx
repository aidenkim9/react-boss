import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, rgb(43, 122, 90), rgb(221, 0, 238));
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 60%;
  gap: 10px;
  div:first-child,
  :last-child {
    grid-column: span 2;
  }
`;

const Box = styled(motion.div)`
  height: 300px;
  background-color: white;
  border-radius: 20px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  display: flex;
`;

const Overlay = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  const [id, setId] = useState<null | string>(null);

  return (
    <Wrapper>
      <Grid>
        {[1, 2, 3, 4].map((n) => (
          <Box onClick={() => setId(n + "")} key={n} layoutId={n + ""} />
        ))}
      </Grid>
      <AnimatePresence>
        {id ? (
          <Overlay
            onClick={() => setId(null)}
            initial={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
            animate={{
              backgroundColor: "rgba(0, 0, 0, 0.5)",
            }}
            exit={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
          >
            <Box layoutId={id + ""} style={{ width: 700, height: 400 }} />
          </Overlay>
        ) : null}
      </AnimatePresence>
    </Wrapper>
  );
}

export default App;
