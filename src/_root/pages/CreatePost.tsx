import PostForm from '@/components/forms/PostForm'

const CreatePost = () => {
  return (
    <div className="flex flex-1">
      <div className="common-container">
        <div className="flex-start w-full max-w-5xl justify-start gap-3">
          <img
            src="/assets/icons/add-post.svg"
            alt="post image"
            width={36}
            height={36}
          />
          <h2 className="h3-bold md:h2-bold w-full text-left">Create Post</h2>
        </div>

        <PostForm />
      </div>
    </div>
  )
}

export default CreatePost
