const NotificationMessage = () => {
    return (
      <div className="p-6 bg- max-w-sm mx-auto bg-yellow-500 rounded-xl shadow-lg flex items-center space-x-4 hover:animate-bounce ">
        <div class="shrink-0">
          <img
            className="size-12"
            src="https://cdn-icons-png.flaticon.com/128/668/668287.png"
            alt="ChitChat Logo"
          />
        </div>
        <div>
          <div className="text-xl font-medium text-black">ChitChat</div>
          <p className="text-slate-500">You have a new message!</p>
        </div>
      </div>
    );
}

export default NotificationMessage