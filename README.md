# elk-app
to setup ELK using Docker

1 create a network
docker networker create elk_net

2 install elasticsearch
docker pull elasticsearch:7.9.1
docker run -d --name elasticsearch --net elk_net -p 9200:9200 -p 9300:9300 -e "discovery.type=single-node" elasticsearch:7.9.1

3 install kibana
docker pull kibana:7.9.1
docker run -d --name kibana --net elk_net -p 5601:5601 kibana:7.9.1

4 install logstash
docker pull logstash:7.9.1
custom logstash dockerfile
docker run -d --name logstash --net elk_net -p 5044:5044 -p 9600:9600 benben-logstash:7.9.1

5 install filebeat
docker pull elastic/filebeat:7.9.1
custom filebeat dockerfile
docker run -d --name filebeat --net elk_net -v /Users/liuchengqiang/workspace/gitrepository/benben-log-volume:/benben-log-volume  benben-filebeat:7.9.1

6 install node app and output the log to the volume created in step.5
docker run -d --name node-app --net elk_net --volumes-from filebeat <node-app Docker Image>