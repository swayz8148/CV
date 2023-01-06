
# _Install arch linux with windows 10 (dual boot)_

#### first steps

```
setfont ter-132n

ping google.com -c 5
If google gets pinged 5 times your good

Verify efi boot
ls /sys/firmware/efi/efivars/
If you see a lot of text your in good

time and date
timedatectl set-timezone Europe/London

Set keyboard layout
loadkeys uk
```

#### Making the Partitons

```
cfdisk /dev/sda
make one partiton with at least 20G | ROOT
make one partiton with the rest of the drive - 4 for the swap | HOME
make one partiton with at least 4GB | SWAP
then write the changes and exit
```

#### Formating the root and home partitons

```
mkfs.ext4 /dev/sda5
mkfs.ext4 /dev/sda6
```

#### Making the swap partitons and enabling it

```
mkswap /dev/sda7
swapon /dev/sda7
```

#### Mount the home and root partions

```
mount /dev/sda5 /mnt
mkdir /mnt/home
mount /dev/sda6 /mnt/home
```

#### Seting the fasets mirrors

```
cp /etc/pacman.d/mirrorlist /etc/pacman.d/mirrorlist.bak
ls /etc/pacman.d
pacman -Sy
pacman -S pacman-contrib
rankmirrors -n 10 /etc/pacman.d/mirrorlist.bak > /etc/pacman.d/mirrorlist
```

#### Setting up pacstrap
```
pacstrap -i /mnt base base-devel linux linux-lts linux-headers linux-firmware intel-ucode
sudo nano vim git neofetch networkmanager dhcpcd pulseaudio
```

#### Generate file system table

```
genfstab -U /mnt > /mnt/etc/fstab

cat /mnt/etc/fstab
should have
/
/home
none
```

#### Chroot into the new install
```
arch-chroot /mnt
```

#### Change the root password
```
passwd
and set the password you want
```

#### Add a new user
```
useradd -m Your Username
passwd Your Username
usermod -aG wheel,storage,power Your Username

EDITOR=nano visudo
uncomment  %wheel ALL=(ALL) ALL
add defaults timestamp_timeout=0
```

#### Setting your locale time

```
nano /etc/locale.gen
uncoment your lang

locale-gen
echo LANG=en_GB.UTF-8 > /etc/locale.conf
export LANG=_GB.UTF-8
```

#### Set the hostname

```
echo hostname you want > /etc/hostname
cat /etc/hostname
```

#### Setting up the hosts

```
nano /etc/hosts
add
127.0.0.1		localhost
::1				localhost
127.0.1.1		hostname.localdomain	localhost
```

#### Setting the timezone

```
ln -sf /usr/share/zoneinfo/Europe/London /etc/localtime

Remember Europe/London is my timezone you have to put your timezone in
```

#### Installing grub

```
mkdir /boot/efi
mount /dev/sda1 /boot/efi/
pacman -S grub efibootmgr dosfstools mtools

nano /etc/default/grub
uncomment last line

pacman -S os-prober
grub-install --target=x86_64-efi --bootloader-id=grub_uefi --recheck
grub-mkconfig -o /boot/grub/grub.cfg -home /boot/grub/grub.cfg

systemctl enable dgcpcd.service
systemctl enable NetworkManager.service
exit the chroot with the command exit
```

#### unmount and reboot the pc

```
umount -lR /mnt
reboot
unplug the usb
```

#### Installing kde-plasma you can choice a differant one but i like this one :)

```
sudo pacman -S xorg xorg-xinit xterm plasma plasma-desktop plasma-wayland-session
kde-applications kdeplasma-addons gdm
sudo nano ~/.xinitrc
add exec startkde
sudo systemctl enable sddm.service

reboot and login
```

#### and that is how i install arch linux with windows 10
