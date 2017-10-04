const fs = require('fs');

const wstream = fs.createWriteStream('./big.file');

for (let i = 0; i < 20000; i++) {
    wstream.write('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat semper augue in viverra. Donec arcu elit, porta vitae hendrerit vitae, ornare ultricies metus. Donec ut dapibus neque. Sed sit amet odio viverra, venenatis turpis in, posuere magna. Vestibulum venenatis laoreet porttitor. Ut tincidunt tincidunt libero eget ornare. Vestibulum aliquam pellentesque tellus, ut molestie dui malesuada vitae. Mauris eleifend, erat id tempor cursus, est neque placerat dolor, nec convallis sapien dui sed orci. Sed hendrerit sodales sem eget lacinia. Ut vitae purus quis ligula malesuada dictum. Phasellus metus quam, cursus nec elementum vel, condimentum in diam. Mauris efficitur nibh non.\n');
}
wstream.end();