import styles from './Avatar.module.css';

interface AvatarProps {
    hasBorder?: boolean;
    src: string;
}

export const Avatar: React.FC<AvatarProps> = ({ hasBorder = true, src }: AvatarProps) => {
    return (
        <img
            className={hasBorder ? styles.avatarWithBorder : styles.avatar}
            src={src}
            alt="Avatar Profile"
        />
    );
}