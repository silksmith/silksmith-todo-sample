/**
 * @param {!Document} document
 * @param {string} id
 */
function before_getById(document, id) {
    document.getElementById(id)
}

/**
 * @param {!jQuery} $
 * @param {string} id
 */
function after_getById($, id) {
    $("#"+id)[0]
}