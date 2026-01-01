export function HeroBackground() {
  return (
    <div className="absolute inset-0 z-0 ">
      <div className="absolute inset-0 bg-background-dark/80 z-10" />
      <div
        className="w-full h-full bg-cover bg-center"
        data-alt="Abstract dark fluid background"
        style={{
          backgroundImage:
            'url("https://lh3.googleusercontent.com/aida-public/AB6AXuClIG7zVBeknjtGsMAu-fK0g9HAH2Pz7TZF_xEHkd2D-P9QseM_UNNrF91Q3QlqCo8C3VhZYILu3XHzyZ2bHYyQENhjQyoGNuME3qF0ZcM7L63s32eaPauL69UAlQ54BabEGpalO85dJN0kT3kCKUYqLL_2NErtJ4XHTpFW0lIxAmR-Wx0k42WvpfNrJpUOtkB_S-vzo7O8Wjb_ygdO3B6d82HM8C0uLXZKqek4GG8SHxKjJu-8KKj9HMMBQRq0L2JoHhsovbl0_sg")',
        }}
      />
      <div className="absolute inset-0 bg-linear-to-b from-background-dark/50 via-transparent to-background-dark z-10" />
    </div>
  );
}
