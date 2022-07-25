const getLink = (store: string, uid: number) => {
    if (store == "Ksp") {
        let link = 'https://ksp.co.il/web/item/' + uid;
        return link;
    }
    if (store == "Ivory") {
        let link = 'https://www.ivory.co.il/catalog.php?id=' + uid;
        return link;
    }

}
export default getLink;