import Button from "../../components/button";
import Dbsaude from "../../components/dbsaude";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";

function Products() {
    return (
        <div className="App">
            <Navbar></Navbar>
            <Dbsaude></Dbsaude>
            <Button></Button>
            <Footer></Footer>
        </div>
    );
}

export default Products;