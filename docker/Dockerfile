# First stage: build the application
ARG BASE_IMAGE=ubuntu:20.04

FROM ${BASE_IMAGE} as builder

# set the maintainer information
MAINTAINER William Denney <wdenney@humanpredictions.com>

# install dependencies
RUN apt-get update && DEBIAN_FRONTEND=noninteractive apt-get install --yes --no-install-recommends \
    git git-lfs unzip wget ca-certificates python3 xz-utils libxml2 sudo tzdata python3-distutils npm golang

# set the timezone
RUN ln -fs /usr/share/zoneinfo/UTC /etc/localtime && dpkg-reconfigure --frontend noninteractive tzdata

# git clone the repository
ARG GITREPO=https://github.com/ankitrohatgi/WebPlotDigitizer.git
ARG GITBRANCH=master

RUN git clone $GITREPO \
    && cd WebPlotDigitizer \
    && git checkout $GITBRANCH \
    && grep -v wine setupUbuntuDev.sh | sed 's/apt install/apt-get install --yes --no-install-recommends/' > setupUbuntuDev-aptfix.sh \
    && chmod +x setupUbuntuDev-aptfix.sh \
    && ./setupUbuntuDev-aptfix.sh \
    && cd webserver \
    && go build \
    && mv settings.json.example settings.json

RUN cd /WebPlotDigitizer/app && npm install && npm run build

# Second stage: build the final image
FROM ${BASE_IMAGE}

# copy the application from the builder stage
COPY --from=builder /WebPlotDigitizer /WebPlotDigitizer

# set the working directory
WORKDIR /WebPlotDigitizer/webserver/

# set the CMD
EXPOSE 8080
CMD ["/WebPlotDigitizer/webserver/webserver"]
