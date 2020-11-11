const $ = require('jquery');
// $.DataTable = require('datatables.net');
$.DataTable = require('datatables.net-bs4');

export const initDatatables = () => {
    $('#DataTable').DataTable({
        dom: "<'row'<'col-sm-12 col-md-6'l><'col-sm-12 col-md-6 text-right'f>>" +
            "<'row'<'col-sm-12'tr>>" +
            "<'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>",
        // data: this.state.posts,
        // columns,
        ordering: true,
        autoWidth: false,
        stateSave: true,
        deferRender: true,
        lengthMenu: [5, 10, 25, 50, 75, 100],
        pagingType: "full_numbers",
        language: {
            "paginate": {
                "first": "<<",
                "last": ">>",
                "next": ">",
                "previous": "<"
            },
            "search": "Поиск",
            "lengthMenu":     "Показано записей _MENU_",
            "info":           "Показано от _START_ до _END_ из _TOTAL_ записей",
            "infoEmpty": "Показано от 0 до 0 из 0 записей",
            "infoFiltered": "(Отфильтровано из _MAX_ записей)",
        }
    });
}

export const destroyDatatables = () => {
    // console.log('destroy')
    $('#DataTable_wrapper').find('table').DataTable().destroy(true);
}