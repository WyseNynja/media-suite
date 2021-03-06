[![GitHub stars](https://img.shields.io/github/stars/WyseNynja/media-suite.svg?style=social)](https://github.com/WyseNynja/media-suite)
[![Docker Pulls](https://img.shields.io/docker/pulls/bwstitt/media-suite.svg)](https://hub.docker.com/r/bwstitt/media-suite/)
[![License](http://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)

# Media Suite

**UNDER CONSTRUCTION**

Run all the search tools, downloaders, managers, and players you could ever need with one command.

```bash
export MEDIA_SUITE_HOME=$HOME/media-suite

docker pull bwstitt/media-suite:latest \
&& docker run \
    --rm -it \
    -e "TARGET=$MEDIA_SUITE_HOME" \
    -v "$MEDIA_SUITE_HOME:$MEDIA_SUITE_HOME" \
    bwstitt/media-suite:latest \
&& $MEDIA_SUITE_HOME/bin/run
```

This will take a while to download everything. Once it finishes, you will have a lot of containers running.

```bash
$ ~/media-suite/bin/compose ps
              Name                               Command                              State                               Ports
---------------------------------------------------------------------------------------------------------------------------------------------
mediasuite_beets_1                  /init                               Up                                  0.0.0.0:8337->8337/tcp
mediasuite_booksonic_1              catalina.sh run                     Up                                  0.0.0.0:8080->8080/tcp
mediasuite_couchpotato_1            /init                               Up                                  0.0.0.0:5050->5050/tcp
mediasuite_deluge_1                 /init                               Up                                  0.0.0.0:58846->58846/tcp,
                                                                                                            0.0.0.0:58946->58946/tcp,
                                                                                                            0.0.0.0:58946->58946/udp,
                                                                                                            0.0.0.0:8112->8112/tcp
mediasuite_headphones_1             /init                               Up                                  0.0.0.0:8181->8181/tcp
mediasuite_hydra_1                  /init                               Up                                  0.0.0.0:5075->5075/tcp
mediasuite_jackett_1                /init                               Up                                  9117/tcp, 0.0.0.0:9177->9177/tcp
mediasuite_lazylibrarian_1          /init                               Up                                  0.0.0.0:5299->5299/tcp
mediasuite_mylar_1                  /init                               Up                                  0.0.0.0:8090->8090/tcp
mediasuite_plex_1                   /init                               Up                                  0.0.0.0:1900->1900/udp,
                                                                                                            0.0.0.0:32400->32400/tcp,
                                                                                                            32400/udp,
                                                                                                            0.0.0.0:32410->32410/udp,
                                                                                                            0.0.0.0:32412->32412/udp,
                                                                                                            0.0.0.0:32413->32413/udp,
                                                                                                            0.0.0.0:32414->32414/udp,
                                                                                                            0.0.0.0:32469->32469/tcp,
                                                                                                            32469/udp, 5353/udp
mediasuite_plexpy_1                 /init                               Up                                  8181/tcp
mediasuite_sabnzbd_1                /init                               Up                                  0.0.0.0:8083->8080/tcp,
                                                                                                            0.0.0.0:9090->9090/tcp
mediasuite_sonarr_1                 /init                               Up                                  0.0.0.0:8989->8989/tcp
mediasuite_tor_1                    /usr/bin/tor -f /etc/tor/torrc      Up                                  9050/tcp
mediasuite_web_1                    nginx -g daemon off;                Up                                  443/tcp, 80/tcp,
                                                                                                            0.0.0.0:8888->8888/tcp
```

Going to each port individually works for now, but I plan to put them all behind nginx at http://localhost:8888/.


# Developing

```bash
docker pull bwstitt/library-composable:latest \
&& web/build.sh \
&& docker build . -t bwstitt/media-suite \
&& docker run \
    --rm -it \
    -e "TARGET=$MEDIA_SUITE_HOME" \
    -v "$MEDIA_SUITE_HOME:$MEDIA_SUITE_HOME" \
    bwstitt/media-suite:latest \
&& $MEDIA_SUITE_HOME/bin/run
```

# TODO

* helper to build docker image for web_dashboard and export the dist directory
