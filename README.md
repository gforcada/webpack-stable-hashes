# Test contenthash stability

This repository is a test to be able to reproduce non-stable `contenthash` substitution.

To reproduce it:

  mkdir -p /tmp/test1
  git clone git@github.com:gforcada/webpack-stable-hashes /tmp/test1/
  cd /tmp/test1/webpack-stable-hashes
  yarn
  yarn release

  mkdir -p /tmp/test2
  git clone git@github.com:gforcada/webpack-stable-hashes /tmp/test2/
  cd /tmp/test2/webpack-stable-hashes
  yarn
  yarn release

Compare the two outputs, the hashes differ even though the content is the very same!

Only the repository path is different!
