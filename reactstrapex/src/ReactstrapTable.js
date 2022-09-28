import {Component} from "react";
import {Table} from "reactstrap";

class ReactstrapTable extends Component {
    render() {
        return (
            <div>
                <Table bordered   hover size={'sm'}>
                    <thead>
                    <tr>
                        <th>number</th>
                        <th>Book Name</th>
                        <th>Price</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope={'row'}>1</th>
                        <td>React 100</td>
                        <td>1000원</td>
                    </tr>
                    <tr>
                        <th scope={'row'}>2</th>
                        <td>React 200</td>
                        <td>2000원</td>
                    </tr>
                    <tr>
                        <th scope={'row'}>3</th>
                        <td>React 300</td>
                        <td>3000원</td>
                    </tr>
                    <tr>
                        <th scope={'row'}>4</th>
                        <td>React 400</td>
                        <td>4000원</td>
                    </tr>
                    <tr>
                        <th scope={'row'}>5</th>
                        <td>React 500</td>
                        <td>5000원</td>
                    </tr>
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default ReactstrapTable;