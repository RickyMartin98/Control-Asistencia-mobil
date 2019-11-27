import React from 'react';
import { StyleSheet, ScrollView, Text , View , ImageBackground, TouchableOpacity, Alert, Image} from 'react-native';
import { black } from 'ansi-colors';
import { Table, Row, Rows, Cell, TableWrapper } from 'react-native-table-component';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';


export default class ReporteAsistencia extends React.Component {
    state = {
        tableHead: ['Dias','Retardos','Faltas','Justificante',''],
        tableData: [
            ['1','1','0','Ninguna','' ],
            ['2','1','0', 'Jornada Especial',''],
            ['10','0','1','Comision',''],
            ['Totales:','2','1']
        ]
    };

    __alertIndex(index) {
        Alert.alert(`Woops, no puedo hacer nada aun, esta row es: ${index + 1}`);
    }

    render () {
        const { tableHead, tableData } = this.state;
        const icon = (data,index) => {
            <TouchableOpacity onPress={() => this.__alertIndex(index)}>
                <View>
                   <FontAwesomeIcon icon="ellipsis-h" style={styles.iconStyle} />
                </View>
            </TouchableOpacity>
        }
        return (
            <ScrollView>
                <ImageBackground source={require("../../assets/FacDrecho.jpg")} style={styles.backgound}>
                    <Text style={styles.parraf}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </Text>
                </ImageBackground>
                <View style={styles.second}>
                    <Table style={styles.TableStyle} >
                        <Row data={tableHead} style={styles.HeadTable} textStyle={styles.textHeadTable} />
                        {
                            tableData.map((rowData,index) => (
                                <TableWrapper>
                                    {
                                        rowData.map((cellData,cellIndex) => (
                                            <Cell key={cellIndex} data={cellIndex === 3 ? icon(cellData,index) : cellData } textStyle={styles.textDataTable} />
                                        ))
                                    }
                                </TableWrapper>
                            ))
                        }
                    </Table>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    backgound: {
        backgroundSize: 'cover',
        height: 1400
    },
    parraf: {
        textAlign: 'justify',
        fontSize: 24,
    },
    second: {
        height: 1400,
        backgroundColor: black
    },
    textDataTable: {
        fontSize: 12,
        fontFamily: 'Arial',
        color: 'white'
    },
    TableStyle: {
        border: 'none',
        borderBottomWidth: 2,
        borderBottomColor: 'white',
    },
    HeadTable: {
        backgroundColor: 'orange',
    },
    textHeadTable: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'white',
    },
    iconStyle: {
        width: 50,
        height:50
    }
});