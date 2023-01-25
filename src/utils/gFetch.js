let productos = [
        {id: '1', categoria: 'Zapatillas deportivas', name: 'Botines Nike Mercurial', price: 50},
        {id: '2', categoria: 'Zapatillas deportivas', name: 'Botines Adidas X Speedportal', price: 100},
        {id: '3', categoria: 'Zapatillas deportivas', name: 'Botines Nike Phantom', price: 150},
        {id: '4', categoria: 'Zapatillas deportivas', name: 'Botines Adidas Preadtor', price: 230},
        {id: '5', categoria: 'Zapatillas deportivas', name: 'Zapatillas Nike Air Max Sc', price: 25},
        {id: '6', categoria: 'Zapatillas de moda', name: 'Zapatillas Nike Court', price: 150},
        {id: '7', categoria: 'Zapatillas de moda', name: 'Zapatillas Converse Chuck Taylor', price: 450},
        {id: '8', categoria: 'Zapatillas de moda', name: 'Zapatillas Nike Dunk Hi Retro', price: 550},
        {id: '9', categoria: 'Zapatillas de moda', name: 'Zapatillas adidas Forum Low', price: 250},
        {id: '10', categoria: 'Zapatillas de moda', name: 'Zapatillas Adidas Superstar', price: 250},
        {id: '11', categoria: 'Zapatillas de moda', name: 'Zapatillas Nike Air Force 1 High', price: 650},
        {id: '11', categoria: 'Zapatillas de moda', name: 'Zapatillas Puma Future Rider', price: 650}
    ]

    export const gFetch = () => {
        return new Promise((res, rej) =>{
            setTimeout(()=> {
                res( productos )
            }, 2000 )
        })
    }