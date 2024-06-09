import { Models } from 'appwrite'

type PostStatsProps = {
  post: Models.Document
  userId: string
}

const PostStats = ({ post, userId }: PostStatsProps) => {
  return (
    <div className="items-centerz-20 flex justify-between">
      <div className="mr-5 flex gap-2">
        <img
          src="/assets/icons/like.svg"
          alt="like"
          width={20}
          height={20}
          className="cursor-pointer"
        />
        <p className="small-medium lg:base-medium">0</p>
      </div>
      <div className="mr-5 flex gap-2">
        <img
          src="/assets/icons/save.svg"
          alt="like"
          width={20}
          height={20}
          className="cursor-pointer"
        />
      </div>
    </div>
  )
}

export default PostStats
