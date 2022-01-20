$(document).ready( function () {
    $('#table_id').DataTable({
        'ajax':'produits.json',
        'columns':[
            {'data' : 'id'},
            {'data':'title'},
            {'data':'type'},
            {'data':'description'},
            {'data':'filename'},
            {'data':'height'},
            {'data':'width'},
            {'data':'price'},
            {'data':'rating'},

        ]
    });
} );