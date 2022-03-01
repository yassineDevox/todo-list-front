export class TrackModel{
    constructor(id=0,title="",description="",thumbnail={},thumbnailColor=""){
        this.id=id
        this.description=description
        this.thumbnail=thumbnail
        this.title=title
        this.thumbnailColor = thumbnailColor
    }
}

const getTitlesTwoFirstLetters = (title) => {
    return title.toUpperCase().substring(0,2)
}

export default  getTitlesTwoFirstLetters