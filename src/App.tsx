import { AppProducts } from "./components/AppProduct/AppProducts";





export const App = () => {
  return (
    <div style={{display:'flex', flexDirection:'column', gap:'2vh'}}>
       {/* <MiPrimerComponente
        text={"Texto desde propiedades"}
        color="red"
        fontSize={5}
        />
        <ComponentCounter/>
        <ComponentUseEffect/>*/}
       {/* <FormComponent/>*/}
       <AppProducts/>
    </div>
  );
};
