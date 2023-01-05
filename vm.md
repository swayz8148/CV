# Hello this is how i install arch linux on my vms
**I use qemu so this will be done using it**


#### Make the .img file
```
cd into the place you installed qemu

qemu-img create -f qcow2 arch.img 100G
```

#### boot into the .img file
```
qemu-system-x86_64.exe -m 1G -smp 2 -smp 2 -boot order=dc -hda arch.img -cdrom "D:\VMS\archlinu.iso"
```


# your vm is open with arch linux running time to install everything

... will continue this soon
