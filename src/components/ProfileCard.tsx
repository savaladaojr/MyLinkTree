import { useState } from "react";
import type { Profile } from "../types";

interface ProfileCardProps {
  profile: Profile;
}

const avatarFallback = "/icons.svg";

export default function ProfileCard({ profile }: ProfileCardProps) {
  const [avatarSrc, setAvatarSrc] = useState(profile.avatarUrl);

  return (
    <header className="profile-card">
      <img
        className="profile-avatar"
        src={avatarSrc}
        alt={`Profile photo of ${profile.name}`}
        loading="lazy"
        decoding="async"
        onError={() => setAvatarSrc(avatarFallback)}
      />
      <div className="profile-copy">
        <h1 className="profile-name">{profile.name}</h1>
        <p className="profile-handle">@{profile.handle.replace(/^@/, "")}</p>
        <p className="profile-bio">{profile.bio}</p>
      </div>
    </header>
  );
}
