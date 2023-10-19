export const isProductValid = (productPost: ProductPost) => {
    if(productPost.active != true && productPost.active != false){
        return false
    }
    if(productPost.description.length < 10) return false
    if(productPost.image.length < 10) return false //todo kan lag fullcheck om dæ e ein url
    if(productPost.name.length < 4) return false
    if(productPost.price < 1) return false
    if(productPost.depth < 1) return false
    if (productPost.height < 1) return false
    if(productPost.weight < 1) return false
    return true
}